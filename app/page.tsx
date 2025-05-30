import Companioncard from "@/components/ui/companioncard";
import Cta from "@/components/ui/cta";
import Companionlist from "@/components/ui/companionlist";
import { recentSessions } from "@/constants";

export default function Homepage() {
  return (
    <main>
      <h1 className="text-2xl underline">Popular companions</h1>
      <section className="home-section">
        <Companioncard
        id="1"
          title="Neura the Brainy Explorer"
          subject="Science"
          topic="Neural Network of the Brain"
          duration={45}
          color="#FF3333"
        />
      <Companioncard
      id="2"
          title="Countsy the Number Wizard"
          subject="Maths"
          topic="Derivatives & Integrals"
          duration={30}
          color="#0080FF"
        />
        <Companioncard
        id="3"
          title="Verba the Vocabulary Builder"
          subject="Language"
          topic="English Literature"
          duration={30}
          color="#66CC00"
        />
      </section>

      <section className="home-section">
        <Companionlist classNames="w-2/3 max-lg:w-full" companions={recentSessions} title="Recently completed sessions" />
        <Cta />
      </section>
    </main>
  );
}
