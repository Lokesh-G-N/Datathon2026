"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, User, Users, Hash, Shield, Loader2, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import registrations from '@/constants/registrations.json';

interface Registration {
  roomNumber: string;
  teamName: string;
  leaderName: string;
  teamSize: string;
  deskNumber: string;
  lookupName: string;
}

export default function TeamLookup() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [foundTeam, setFoundTeam] = useState<Registration | null>(null);
  const [suggestions, setSuggestions] = useState<Registration[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (termOverride?: string) => {
    const term = termOverride || searchTerm;
    if (!term.trim()) return;

    setIsLoading(true);
    setHasSearched(false);

    // Artificial delay for premium loading feel
    setTimeout(() => {
      const processedSearch = term.toLowerCase().replace(/\s+/g, '');
      const allRegs = registrations as Registration[];

      const exactMatch = allRegs.find(t => t.lookupName === processedSearch);

      if (exactMatch) {
        setFoundTeam(exactMatch);
        setSuggestions([]);
      } else {
        const partialMatches = allRegs
          .filter(t => t.lookupName.includes(processedSearch))
          .sort((a, b) => a.teamName.length - b.teamName.length) // prioritize shorter/closer matches
          .slice(0, 5);

        setFoundTeam(null);
        setSuggestions(partialMatches);
      }

      setIsLoading(false);
      setHasSearched(true);
      if (termOverride) setSearchTerm(termOverride);
    }, 800);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section id="lookup" className="py-24 relative overflow-hidden bg-black/50">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 border-blue-500/30 text-blue-400 px-4 py-1 rounded-full uppercase tracking-widest text-[10px]">
              Registration Info
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase italic tracking-tighter">
              FIND YOUR <span className="text-blue-500">DESK</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto italic">
              Enter your team name exactly as registered to locate your assigned desk and room number.
            </p>
          </motion.div>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mb-12"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-2xl blur-lg" />
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-2 rounded-2xl flex items-center gap-3">
              <div className="pl-4">
                <Search className="w-5 h-5 text-blue-400/60" />
              </div>
              <Input
                type="text"
                placeholder="Enter exact Team Name..."
                className="bg-transparent border-none text-white text-lg h-14 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-white/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Button
                onClick={() => handleSearch()}
                disabled={isLoading || !searchTerm.trim()}
                className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl h-12 px-6 font-bold flex gap-2 group transition-all"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    Search
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </div>

            {hasSearched && !foundTeam && suggestions.length === 0 && !isLoading && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400/80 text-sm mt-3 ml-2 flex items-center gap-2 italic"
              >
                No team found with that name. Please check for spelling mistakes.
              </motion.p>
            )}
          </motion.div>

          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-20"
              >
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-500/10 rounded-full animate-pulse" />
                  </div>
                </div>
                <p className="text-blue-400/60 mt-6 font-black uppercase tracking-[0.3em] text-[10px]">Accessing Database...</p>
              </motion.div>
            ) : foundTeam ? (
              <motion.div
                key={foundTeam.teamName}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="bg-gradient-to-br from-white/10 to-transparent backdrop-blur-2xl border-white/10 overflow-hidden relative group">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Shield className="w-32 h-32 text-blue-500" />
                  </div>

                  <CardContent className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                      <div>
                        <span className="text-blue-500 text-xs font-black uppercase tracking-widest mb-2 block">Team Identity</span>
                        <h3 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter">
                          {foundTeam.teamName}
                        </h3>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Status</span>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30 px-3 py-1 flex gap-2 items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          CONFIRMED
                        </Badge>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <LookupItem
                        icon={<User className="w-5 h-5" />}
                        label="Team Leader"
                        value={foundTeam.leaderName}
                      />
                      <LookupItem
                        icon={<Users className="w-5 h-5" />}
                        label="Team Size"
                        value={`${foundTeam.teamSize} Members`}
                      />
                      <LookupItem
                        icon={<Hash className="w-5 h-5" />}
                        label="Desk Number"
                        value={`DESK - ${foundTeam.deskNumber}`}
                        highlight
                      />
                      <LookupItem
                        icon={<MapPin className="w-5 h-5" />}
                        label="Location Room"
                        value={`ROOM - ${foundTeam.roomNumber}`}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ) : hasSearched && suggestions.length > 0 ? (
              <motion.div
                key="suggestions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10" />
                  <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">Search result</span>
                  <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10" />
                </div>

                <div className="grid gap-4">
                  {suggestions.map((team, idx) => (
                    <motion.div
                      key={team.teamName}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <div
                        className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between hover:bg-white/10 transition-all cursor-pointer group"
                        onClick={() => handleSearch(team.teamName)}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold">
                            {idx + 1}
                          </div>
                          <div>
                            <h4 className="text-white font-bold">{team.teamName}</h4>
                            <p className="text-slate-500 text-xs">Lead by {team.leaderName}</p>
                          </div>
                        </div>
                        <Button variant="ghost" className="text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                          View
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}

function LookupItem({ icon, label, value, highlight = false }: { icon: React.ReactNode, label: string, value: string, highlight?: boolean }) {
  return (
    <div className="flex items-start gap-4">
      <div className={`p-3 rounded-xl ${highlight ? 'bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]' : 'bg-white/5'} flex items-center justify-center text-white transition-all`}>
        {icon}
      </div>
      <div>
        <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] block mb-1">{label}</span>
        <span className={`text-lg font-bold ${highlight ? 'text-blue-400' : 'text-slate-200'} tracking-tight`}>{value}</span>
      </div>
    </div>
  );
}
