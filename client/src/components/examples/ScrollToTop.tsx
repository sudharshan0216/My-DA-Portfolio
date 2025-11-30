import ScrollToTop from '../ScrollToTop'

export default function ScrollToTopExample() {
  return (
    <div className="h-[200vh] bg-background p-8">
      <p className="text-foreground">Scroll down to see the scroll-to-top button appear</p>
      <ScrollToTop />
    </div>
  )
}
