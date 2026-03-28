import { Server, Cloud, Shield, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { skillCategories } from "@/data/skills";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Server,
  Cloud,
  Shield,
  Activity,
};

export function SkillsList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {skillCategories.map((category) => {
        const Icon = iconMap[category.icon] ?? Server;
        return (
          <Card key={category.id} className="hover:border-primary/30 transition-colors duration-200">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-sm">{category.name}</CardTitle>
                </div>
              </div>
              <CardDescription className="text-xs leading-relaxed pt-1">
                {category.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
