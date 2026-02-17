import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-12 relative z-10 border-t border-white/5 bg-transparent">
            <div className="container px-4 mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-red-400">
                            DATATHON 2026
                        </Link>
                        <p className="mt-4 text-slate-400 max-w-sm">
                            Forging the next generation of tech legends. Join us for 24 hours of innovation, code, and caffeine.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-200 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="#about" className="text-slate-400 hover:text-blue-400 transition-colors">About</Link></li>
                            <li><Link href="#problems" className="text-slate-400 hover:text-blue-400 transition-colors">Tracks</Link></li>
                            <li><Link href="#timeline" className="text-slate-400 hover:text-blue-400 transition-colors">Schedule</Link></li>
                            <li><Link href="#prizes" className="text-slate-400 hover:text-blue-400 transition-colors">Prizes</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        © 2026 Datathon CIT. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500">
                        <Link href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
