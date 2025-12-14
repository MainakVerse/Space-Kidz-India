"use client"

import { useEffect } from "react"

export function ImageScrollEffects() {
  useEffect(() => {
    const images = document.querySelectorAll("img")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const img = entry.target as HTMLImageElement

          if (entry.isIntersecting) {
            img.classList.add("in-view")
            img.classList.remove("below-view")
          } else {
            const rect = entry.boundingClientRect
            if (rect.top < 0) {
              img.classList.add("below-view")
              img.classList.remove("in-view")
            } else {
              img.classList.remove("in-view", "below-view")
            }
          }
        })
      },
      {
        threshold: [0, 0.1, 0.5],
        rootMargin: "0px 0px -100px 0px",
      },
    )

    images.forEach((img) => {
      img.classList.add("scroll-blur-image")
      observer.observe(img)
    })

    return () => {
      images.forEach((img) => observer.unobserve(img))
    }
  }, [])

  return null
}
