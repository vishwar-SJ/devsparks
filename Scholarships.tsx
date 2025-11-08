import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScholarshipCard from "@/components/ScholarshipCard";
import { scholarships } from "@/data/scholarships";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

import { supabase } from '@/lib/supabase';

const Scholarships = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  // state to hold remote scholarships if available
  const [remoteScholarships, setRemoteScholarships] = useState<typeof scholarships | null>(null);

  const baseScholarships = remoteScholarships ?? scholarships;

  const filteredScholarships = baseScholarships.filter((scholarship) => {
    const matchesSearch = (scholarship.title || '')?.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
      (scholarship.provider || '')?.toString().toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === "all" || (scholarship.type || '') === typeFilter;
    const matchesCategory = categoryFilter === "all" || (scholarship.category || '').toString().includes(categoryFilter);
    
    return matchesSearch && matchesType && matchesCategory;
  });


  useEffect(() => {
    let mounted = true;
    async function loadRemote() {
      try {
        // Try local API first (server serves scholarships.json)
        const res = await fetch('/api/scholarships');
        if (res.ok) {
          const data = await res.json();
          if (mounted && Array.isArray(data) && data.length > 0) {
            setRemoteScholarships(data as any);
          }
        }
      } catch (err) {
        // no-op: fall back to local data
        console.warn('Supabase scholarships fetch failed, using local data.', err);
      }
    }
    loadRemote();
    return () => { mounted = false; };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-12 bg-gradient-hero">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Available Scholarships
            </h1>
            <p className="text-lg text-white/90">
              Explore {baseScholarships.length}+ scholarship opportunities
            </p>
          </div>
        </section>

        <section className="py-8 border-b border-border bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search scholarships..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="State">State</SelectItem>
                  <SelectItem value="Central">Central</SelectItem>
                  <SelectItem value="Private">Private</SelectItem>
                </SelectContent>
              </Select>

              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Merit">Merit-Based</SelectItem>
                  <SelectItem value="SC/ST">SC/ST</SelectItem>
                  <SelectItem value="OBC">OBC</SelectItem>
                  <SelectItem value="Minority">Minority</SelectItem>
                  <SelectItem value="Girl">Girl Child</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="mb-6">
              <p className="text-muted-foreground">
                Showing {filteredScholarships.length} scholarship{filteredScholarships.length !== 1 ? 's' : ''}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredScholarships.map((scholarship) => (
                <ScholarshipCard key={scholarship.id} {...scholarship} />
              ))}
            </div>

            {filteredScholarships.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  No scholarships found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Scholarships;
