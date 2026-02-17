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
        <section id="tracks" className="py-20 bg-secondary/20">
            <div className="container px-4 mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">Problem Statements</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {tracks.map((track, i) => (
                        <Card key={i} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1">
                            <CardHeader>
                                <CardTitle className="text-2xl">{track.title}</CardTitle>
                                <CardDescription className="text-base mt-2">{track.desc}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {track.tags.map(tag => (
                                        <Badge key={tag} variant="secondary">{tag}</Badge>
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
