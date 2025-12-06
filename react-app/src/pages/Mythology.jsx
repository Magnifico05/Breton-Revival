import React from "react";
import StoryCard from "../components/StoryCard";

const STORIES = [
  // Short, attributed summaries gathered from public sources (Wikipedia CC BY-SA)
  {
    title: "Ankou — The Breton Harbinger of Death",
    excerpt:
      "The Ankou is a personification of death in Breton folklore — a pale, hooded figure who collects the souls of the dead.",
    full: `Ankou is the personification and servant of Death in Breton folklore, also appearing in Cornish and Welsh traditions. Typically depicted as a skeletal figure or shadowy man cloaked in black with a broad hat, Ankou roams the land collecting souls. He drives a creaking, black death-cart pulled by four dark horses and accompanied by two ghostly helpers.

Legends offer various origins: he may be the first child of Adam and Eve, the first person to die each year—condemned to gather souls until replaced—or a cruel prince cursed after challenging Death during a hunt. Each parish in Brittany is said to have its own Ankou, and unusual deaths are attributed to a particularly “wicked” one.

Ankou is deeply embedded in Breton culture, symbolized in church carvings, local sayings, and omens such as screeching wagon wheels or owl cries. Modern fiction, comics, games, and television continue to reinterpret him, blending ancient fear with contemporary storytelling.`,
  },
  {
    title: "Korrigans — Enigmatic Fairies and Tricksters of Brittany",
    excerpt:
      "Korrigans are fairy-like beings associated with springs, dolmens and night-time dancing; they can be beautiful or dangerous.",
    full: `Korrigans are small fairy- or dwarf-like beings in Breton folklore, their name deriving from words meaning “little dwarf.” Their appearance and behavior vary across regions, and many related names exist. In some traditions, they resemble mischievous spirits who dance around fountains, guard hidden treasures, and test humans through riddles or tricks.

Other stories portray korrigans as beautiful, siren-like water spirits who inhabit springs and rivers. Seductive at night but hideous in daylight, they lure men with their singing and flowing hair, only to cause their deaths. They often oppose Christianity, sometimes described as former druidesses or supernatural princesses who lost their power after the religion’s arrival.

Korrigans possess abilities such as shapeshifting, prophecy, and supernatural speed. Known for stealing children and replacing them with changelings, they are most dangerous on Samhain when they linger near ancient stones. A Breton poem describes nine korrigans dancing in moonlight with flowers in their hair, emphasizing both their beauty and their mystery.`,
  },
  {
    title: "Mélusine",
    excerpt:
      "Mélusine is a water-spirit/serpent-woman whose tale became a medieval romance and influenced many local legends.",
    full: `Melusine is a major figure in European folklore, particularly in France, Luxembourg, and the Low Countries. She is usually described as a woman who becomes a serpent or fish from the waist down, sometimes with wings or multiple tails. Her story almost always involves a supernatural woman who marries a mortal man under the condition that he must not see her on a specific day each week. When he breaks this promise, her hidden form is revealed and she disappears, often in sorrow, leaving behind children or a dynasty.

The origin of her name is uncertain. Some scholars connect it to the Latin word “melus,” meaning melodious, while others relate it to a regional Poitevin fairy known as Mère Lusine. Different regions of France preserve different names for her, such as Merlusse or Merluisaine.

The most influential medieval version of her story was written by Jean d’Arras in 1393. It describes Melusine’s childhood in Avalon, the curse that forces her to take serpent form every Saturday, and her marriage to Raymondin, a nobleman she encounters after he accidentally kills his uncle. She agrees to help him and accepts his proposal on the condition that he must never see her on Saturdays. Over the years she gives birth to many children, builds castles through magic, and establishes the fortunes of the House of Lusignan. When Raymondin finally becomes suspicious and spies on her during her Saturday bath, he discovers her serpent shape. Although he keeps the secret for a time, he eventually reveals it in anger during a family tragedy. Melusine then transforms into a dragon, gives him two magical rings, and departs forever, returning only occasionally to mourn the death of Lusignan descendants.

Her story is closely connected to well-known mythic patterns such as shapeshifting brides, swan maidens, guardian spirits of particular locations, and the tale of the loathly lady whose enchantment can only be broken under special conditions. In the Aarne-Thompson-Uther index of folk narratives, the Melusine legend is classified as type 425O.

French tradition associates Melusine especially with the Lusignan family, who claimed her as an ancestor. Stories describe her as a protective spirit who circles the towers of their castle before misfortune. Luxembourg has a parallel version in which Count Siegfried marries a woman who builds the city’s fortress by magic and disappears when he breaks her rule of privacy. According to this legend she returns every seven years carrying a golden key that could free her if taken by a brave enough person.

German versions of the tale often portray her as a demonic seductress or elemental being. These retellings inspired the Renaissance writer Paracelsus, whose ideas about water spirits later influenced romantic works such as Fouqué’s “Undine” and various operas by Hoffmann and Dvořák. In Britain, similar legends were used to explain the ancestry of noble families such as the Counts of Anjou, whose mysterious ancestress was said to flee through the church roof when confronted in her true form. Related motifs appear in medieval romances and ballads such as Richard Coer de Lyon, Le Bel Inconnu, and The Laidly Worm.

Many historians interpret Melusine as a figure of fertility and prosperity. She builds castles, enlarges territories, and brings wealth, symbolizing the supernatural origins of medieval power and growth. Her story reflects a persistent theme in folklore: the fragile union between mortals and the otherworld, destroyed by transgression or broken trust.

Melusine continues to appear in literature, music, and modern media. She inspired poems, novels, operas, and even contemporary fantasy works. Adaptations range from Mendelssohn’s overture “The Fair Melusine” to modern interpretations in fiction and video games. Across centuries, she remains one of Europe’s most enduring fairy figures, representing mystery, enchantment, taboo, and the blending of the human world with the supernatural.`,
  },
  {
    title: "Legend of Ys — The Sunken City of Brittany",
    excerpt:
      "The drowned city of Ys (often collected in Ballads such as those in Barzaz Breiz) tells of a coastal kingdom swallowed by the sea.",
    full: `Ys (Breton: Kêr-Is), the “Low City,” is a legendary Breton metropolis said to have been swallowed by the sea off the coast of Douarnenez. Built below sea level and protected by great dikes, Ys was ruled by King Gradlon, a pious and noble figure in most versions of the tale. His daughter, Princess Dahut, is portrayed as reckless, sinful, or even a sorceress whose actions ultimately bring about the city’s destruction.

According to tradition, Dahut steals or misuses the key to the dike gates—symbol of royal authority—either to admit a lover or under the influence of a deceptive suitor. Opening the gates allows the ocean to surge in, drowning the city. Warned by a saint, Gradlon escapes on his magical horse, but must abandon Dahut to survive. After sinking beneath the waves, Dahut becomes a morgen (mermaid) who haunts the waters, singing mournful songs. Ruins of Ys were once said to be visible at low tide, and its submerged bells heard beneath the sea.

The legend developed between the 15th and 17th centuries but was shaped heavily by 19th-century collectors such as La Villemarqué and Souvestre, who introduced new details, including Dahut’s witchcraft, demonic temptation, and magical sea creatures. The tale inspired numerous literary retellings, operas, paintings, and musical works—most famously Debussy’s La cathédrale engloutie. A Breton proverb claims that when Paris sinks, Ys will rise again, linking its mythic return to the fate of France itself.`,
  },
];

export default function Mythology() {
  return (
    <div>
      <section className="section">
        <h2>Mythology & Folklore</h2>
        <p className="kv">
          Browse short stories and expand any card to read the full tale. These
          are great prompts for language practice and community storytelling
          nights.
        </p>
        <div className="grid">
          {STORIES.map((s, idx) => (
            <StoryCard key={idx} {...s} />
          ))}
        </div>
      </section>
    </div>
  );
}
