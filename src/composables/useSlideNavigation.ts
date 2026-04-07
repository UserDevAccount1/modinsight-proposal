import { onMounted, onUnmounted } from 'vue'
import { usePresentationStore } from '@/stores/presentation'

export function useSlideNavigation() {
  const store = usePresentationStore()
  let lastSlideChange = 0

  function handleKeydown(e: KeyboardEvent) {
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault()
        store.next()
        break
      case 'ArrowLeft':
        e.preventDefault()
        store.prev()
        break
      case 'Home':
        e.preventDefault()
        store.goFirst()
        break
      case 'End':
        e.preventDefault()
        store.goLast()
        break
    }
  }

  function findScrollContainer(target: EventTarget | null): HTMLElement | null {
    let el = target as HTMLElement | null
    while (el) {
      if (el.scrollHeight > el.clientHeight + 2) {
        const style = getComputedStyle(el)
        const overflow = style.overflowY
        if (overflow === 'auto' || overflow === 'scroll') {
          return el
        }
      }
      el = el.parentElement
    }
    return null
  }

  function handleWheel(e: WheelEvent) {
    const scrollContainer = findScrollContainer(e.target)

    if (scrollContainer) {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer
      const atTop = scrollTop <= 1
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1
      const scrollingDown = e.deltaY > 0
      const scrollingUp = e.deltaY < 0

      // If there's room to scroll in the current direction, let the page scroll naturally
      if ((scrollingDown && !atBottom) || (scrollingUp && !atTop)) {
        return // don't prevent default — let the content scroll
      }

      // At a boundary — change slide with debounce
      const now = Date.now()
      if (now - lastSlideChange < 600) {
        e.preventDefault()
        return
      }

      e.preventDefault()
      lastSlideChange = now
      if (scrollingDown) store.next()
      else if (scrollingUp) store.prev()
    } else {
      // No scrollable container (e.g., cover slide) — change slide directly
      const now = Date.now()
      if (now - lastSlideChange < 400) {
        e.preventDefault()
        return
      }

      e.preventDefault()
      lastSlideChange = now
      if (e.deltaY > 0) store.next()
      else if (e.deltaY < 0) store.prev()
    }
  }

  let touchStartX = 0
  let touchStartY = 0

  function handleTouchStart(e: TouchEvent) {
    const touch = e.touches[0]
    if (!touch) return
    touchStartX = touch.clientX
    touchStartY = touch.clientY
  }

  function handleTouchEnd(e: TouchEvent) {
    const touch = e.changedTouches[0]
    if (!touch) return
    const dx = touch.clientX - touchStartX
    const dy = touch.clientY - touchStartY

    // Only horizontal swipes trigger slide change
    if (Math.abs(dx) < 50 || Math.abs(dy) > Math.abs(dx)) return

    if (dx < 0) store.next()
    else store.prev()
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart)
    window.addEventListener('touchend', handleTouchEnd)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
    window.removeEventListener('wheel', handleWheel)
    window.removeEventListener('touchstart', handleTouchStart)
    window.removeEventListener('touchend', handleTouchEnd)
  })

  return store
}
