"use client";

import { useState, useEffect, useRef } from "react";
import { Search, Package, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { searchContent, SearchResult } from "@/lib/search";
import Image from "next/image";
// import Link from "next/link";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Reset query when dialog closes to prevent flashing
  useEffect(() => {
    if (!open) {
      setQuery("");
      setResults([]);
      setIsSearching(false);
    } else if (inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  // Debounced search
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      const searchResults = searchContent(query);
      setResults(searchResults);
      setIsSearching(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [query]);

  const handleResultClick = (result: SearchResult) => {
    onOpenChange(false);
    setQuery("");
    // Force page refresh by using window.location
    window.location.href = result.url;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-h-[80vh] flex flex-col top-[20%] translate-y-0 max-w-[calc(100%-2rem)] sm:max-w-2xl"
      >
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3D348B] focus:border-transparent"
          />
          {isSearching && (
            <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-5 animate-spin" />
          )}
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto mt-4">
          {query.trim() && !isSearching && results.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No results found for &quot;{query}&quot;
            </div>
          )}

          {query.trim() && !isSearching && results.length > 0 && (
            <div className="space-y-2">
              {results.map((result) => (
                <button
                  key={`${result.type}-${result.id}`}
                  onClick={() => handleResultClick(result)}
                  className="w-full text-left p-4 rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-[#3D348B] transition-colors"
                >
                  <div className="flex gap-4">
                    {result.image && (
                      <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden bg-gray-100">
                        <Image
                          src={result.image}
                          alt={result.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Package className="size-4 text-[#3D348B]" />
                        <span className="text-xs font-semibold text-[#3D348B] uppercase">
                          {result.category?.split("-").join(" ")}
                        </span>
                        {/* {result.category && (
                          <span className="text-xs text-gray-500">
                            • {result.category}
                          </span>
                        )} */}
                      </div>
                      <h3 className="font-semibold text-gray-900">
                        {result.title}
                      </h3>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {!query.trim() && (
            <div className="text-center py-8 text-gray-500">
              Start typing to search products...
            </div>
          )}
        </div>

        {/* Keyboard shortcut hint */}
        <div className="text-xs text-gray-400 mt-2 pt-2 border-t">
          Press <kbd className="px-1.5 py-0.5 bg-gray-100 rounded">Esc</kbd> to
          close
        </div>
      </DialogContent>
    </Dialog>
  );
}

