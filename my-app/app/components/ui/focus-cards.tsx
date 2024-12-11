'use client'

import { useState, useRef, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FocusCard {
  id: number
  title: string
  content: string
}

const DUMMY_DATA: FocusCard[] = [
  { id: 1, title: "Card 1", content: "This is the content for card 1" },
  { id: 2, title: "Card 2", content: "This is the content for card 2" },
  { id: 3, title: "Card 3", content: "This is the content for card 3" },
  { id: 4, title: "Card 4", content: "This is the content for card 4" },
]

export function FocusCards() {
  const [focusedIndex, setFocusedIndex] = useState<number>(-1)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault()
        setFocusedIndex((prevIndex) => {
          const newIndex = e.key === 'ArrowRight'
            ? (prevIndex + 1) % DUMMY_DATA.length
            : (prevIndex - 1 + DUMMY_DATA.length) % DUMMY_DATA.length
          cardRefs.current[newIndex]?.focus()
          return newIndex
        })
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {DUMMY_DATA.map((card, index) => (
        <Card
          key={card.id}
          ref={el => cardRefs.current[index] = el}
          tabIndex={0}
          className={cn(
            "w-[350px] transition-all duration-300 ease-in-out cursor-pointer",
            focusedIndex === index ? "ring-2 ring-primary" : "hover:shadow-md"
          )}
          onFocus={() => setFocusedIndex(index)}
          onMouseEnter={() => setFocusedIndex(index)}
          onMouseLeave={() => setFocusedIndex(-1)}
        >
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
            <p className="text-muted-foreground">{card.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}