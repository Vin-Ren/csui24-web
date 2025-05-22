'use client'

import { useState } from 'react'
import { Reaction } from './types'
import { useLocalStorageSet } from '@/hooks/useLocalStorageSet'

type ReactionBarProps = {
  menfessId: string
  initialReactions: Reaction[]
}

const enabledReactions = (process.env.NEXT_PUBLIC_ENABLED_REACTIONS ?? '')
  .split(',')
  .map(r => r.trim())
  .filter(Boolean)

export function ReactionBar({ menfessId, initialReactions }: ReactionBarProps) {
  // Map reaction type -> count for quick access
  const initialCounts: Record<string, number> = {}
  initialReactions.forEach(({ type, count }) => {
    initialCounts[type] = count
  })

  const [counts, setCounts] = useState<Record<string, number>>(initialCounts)
  const [clicked, setClicked] = useLocalStorageSet(
    `menfess-reactions:${menfessId}`,
    new Set()
  )
  const [loadingType, setLoadingType] = useState<string | null>(null)

  const handleReact = async (type: string) => {
    setLoadingType(type)
    try {
      const res = await fetch('/api/menfess-reaction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ menfessId, type, action: (clicked.has(type) ? 'remove' : 'add') }),
      })

      console.log(res)
      if (res.ok) {
        const resData = await res.json()
        setCounts(prev => ({
          ...prev,
          [type]: resData.newCount,
        }))

        // Always create a new Set to trigger re-render
        setClicked(prev => {
          const updated = new Set(prev)
          if (clicked.has(type))
            updated.delete(type);
          else
            updated.add(type)
          return updated
        })

      }
    } catch (err) {
      console.error('Failed to send reaction', err)
    } finally {
      setLoadingType(null)
    }
  }

  return (
    <div className="flex gap-2 flex-wrap">
      {enabledReactions.map(type => {
        const isClicked = clicked.has(type)

        return (
          <button
            key={type}
            onClick={() => handleReact(type)}
            type="button"
            disabled={loadingType!==null}
            aria-label={`React with ${type}`}
            className={`
          flex items-center gap-1 px-3 py-1.5 rounded-xl border text-sm font-medium transition-all
          ${isClicked
                ? 'bg-slate-800 border-blue-300 shadow-inner'
                : 'bg-transparent text-white/80 border-white/20 hover:bg-white/10 hover:text-white'}
        `}
          >
            <span className="sm:text-lg max-sm:text-sm">{type}</span>
            <span className='max-sm:text-xs'>{counts[type] || 0}</span>
          </button>
        )
      })}
    </div>
  )
}
