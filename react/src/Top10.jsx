import styles from "./Top10.module.css";
import { Top10Item } from "./Top10Item";
export function Top10() {
  return (
    <section className={styles.top10}>
      <h2>Top 10 Games</h2>
      <ol className={styles.list}>
        <Top10Item
          title="1. Hytale"
          description="(Ik heb al een paar jaar gewacht (ongeveer 7 of 8 jaar) op deze game, 
        en ja het is net zo goed als ik dacht dat het zou zijn)"
        />
        <Top10Item
          title="2. Paper Mario: The Thousand Year Door"
          description="(Dit is een van de eerste rpgs dat ik heb gespeeld, 
        en de characters, humor, gameplay, visuals en muziek, zijn 1 van de beste die een mario game heeft gehad)"
        />
        <Top10Item
          title="3. Mario & Luigi: Superstar Saga + Bowser's Minions"
          description="(Dit is net onder paper mario, 
        ik vindt de humor en gameplay en animations leuker dan paper mario)"
        />
        <Top10Item
          title="4. Doki Doki Literature Club Plus!"
          description="(Dit is een psychologische horror
          game dat zich voordoet als een innocent visual novel, en er zijn heel
          veel goede en unieke mods met hun eigen stories)"
        />
        <Top10Item
          title="5. Until Then"
          description="(Dit is een game dat gaat over het laten gaan van het
          verleden, en het is een hele mooie game, 1 van de beste visual novels,
          en het krijgt een DLC die ik ga spelen)"
        />
        <Top10Item
          title="6. Outcore"
          description="(Dit is waarschijnlijk de meest unieke game die ik heb
          gespeeld, want bijna alles gebeurt op je scherm en je files, en niet
          in een specefieke tab)"
        />
        <Top10Item
          title="7. Deltarune"
          description="(De game is nog niet helemaal klaar, er zijn 4 van de 7
          chapters uit, maar alles is nu al zo goed)"
        />
        <Top10Item
          title="8. Stardew Valley"
          description="(Voor het meeste gewoon heel erg makkelijk en
          calmerend om te spelen, maar er is wel veel te doen)"
        />
        <Top10Item
          title="9. Mario + Rabbids Kingdom Battle"
          description="(Ik heb de dlc niet gespeeld, maar
          ik vindt het 1 van de grappigste games)"
        />
        <Top10Item
          title="10. Mario Party of Mario kart of Among Us of Repo"
          description="(met vrienden/familie, er zijn veel games dat leuker is met hun)"
        />
        <Top10Item
          title="Honorable mention: Minecraft java edition"
          description="(hytale is in early access,
          maar lijkt op minecraft en gaat waarschijnlijk leuker zijn)"
        />
      </ol>
    </section>
  );
}
