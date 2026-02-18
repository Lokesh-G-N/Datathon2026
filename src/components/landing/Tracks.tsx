import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Tracks() {
    const tracks = [
        {
            title: "AI & Machine Learning",
            desc: "Build intelligent systems that learn and adapt. Focus on NLP, Computer Vision, or Predictive Analytics.",
            tags: ["OpenAI", "PyTorch", "TensorFlow"]
        },
        {
            title: "Web3 & Blockchain",
            desc: "Decentralize the future. Create dApps, smart contracts, or innovative DeFi solutions.",
            tags: ["Solidity", "Ethereum", "DeFi"]
        },
        {
            title: "Social Impact",
            desc: "Tech for good. Solve pressing issues in healthcare, education, or sustainability.",
            tags: ["Sustainability", "EdTech", "Health"]
        },
        {
            title: "Open Innovation",
            desc: "No limits. Build whatever you want using any technology stack.",
            tags: ["AR/VR", "IoT", "GameDev"]
        }
    ];

    return (
        <section id="tracks" className="py-6 md:py-20 bg-secondary/20">
            <div className="container px-4 mx-auto">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 uppercase italic">Problem Statements</h2>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6">
                    {tracks.map((track, i) => (
                        <Card key={i} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1 rounded-2xl md:rounded-3xl">
                            <CardHeader className="p-3 md:p-6">
                                <CardTitle className="text-sm md:text-2xl leading-tight">{track.title}</CardTitle>
                                <CardDescription className="text-xs md:text-base mt-1 md:mt-2 line-clamp-2 md:line-clamp-none leading-tight">{track.desc}</CardDescription>
                            </CardHeader>
                            <CardContent className="p-3 md:p-6 pt-0 md:pt-0">
                                <div className="flex flex-wrap gap-1 md:gap-2">
                                    {track.tags.map(tag => (
                                        <Badge key={tag} variant="secondary" className="text-[10px] md:text-xs px-1.5 md:px-2 py-0 md:py-0.5">{tag}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
