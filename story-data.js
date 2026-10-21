// Adult canonical story, revision 2026-09-30.
const story={
  "version": 2,
  "title": "The Thirteenth Lantern: Choose Your Own Adventure",
  "subtitle": "An adult horror story of erased identities, broken bodies and a town that learned to call sacrifice kindness.",
  "chapters": [
    {
      "id": 1,
      "title": "Lanternfall",
      "summary": "The town offers a welcome while its shadows begin to count."
    },
    {
      "id": 2,
      "title": "Those Behind the Masks",
      "summary": "An adult festival conceals a second procession and its missing residents."
    },
    {
      "id": 3,
      "title": "The House of Borrowed Faces",
      "summary": "A family manor preserves the bargain that made the town."
    },
    {
      "id": 4,
      "title": "Roads Under the Graveyard",
      "summary": "The dead hold testimony the living have edited."
    },
    {
      "id": 5,
      "title": "The Castle of Last Names",
      "summary": "The thirteen adult captives wait behind the Iron King’s accounts."
    },
    {
      "id": 6,
      "title": "The Thirteenth Flame",
      "summary": "Saving the town requires choosing what it will owe tomorrow."
    }
  ],
  "art": {
    "wolf": {
      "src": "ext/demos/top-secret/lantern-gate/assets/bellwrought.webp",
      "caption": "The Bellwrought, approved transformation concept used as a horror illustration",
      "concept": true
    },
    "castle": {
      "src": "ext/demos/top-secret/lantern-gate/assets/castle-cinematic.webp",
      "caption": "The Mourning Crown, castle concept used as a story illustration",
      "concept": true
    },
    "sexton": {
      "src": "ext/demos/top-secret/lantern-gate/assets/creatures/drowned-sexton.webp",
      "caption": "The Drowned Sexton, creature illustration",
      "concept": true
    },
    "cantor": {
      "src": "ext/demos/top-secret/lantern-gate/assets/creatures/hollow-cantor.webp",
      "caption": "The Hollow Cantor, creature illustration",
      "concept": true
    },
    "widow": {
      "src": "ext/demos/top-secret/lantern-gate/assets/creatures/tallow-widow.webp",
      "caption": "The Tallow Widow, creature illustration",
      "concept": true
    },
    "stairbound": {
      "src": "ext/media/horror/church-stairs-clean.png",
      "caption": "The Stairbound, supplied church horror illustration",
      "concept": false
    },
    "chainbearer": {
      "src": "ext/media/horror/church-woman-clean.png",
      "caption": "The Chain-Bearer, supplied church horror illustration",
      "concept": false
    }
  },
  "characters": [
    {
      "id": "reader",
      "name": "The outsider",
      "description": "An adult investigator who answered Iona’s letter after losing someone to a disputed inquest.",
      "gender": "unspecified",
      "voiceRole": "reader"
    },
    {
      "id": "silas",
      "name": "Silas Reed",
      "description": "A former railway engineer whose wife was erased from the town’s casualty register. He carries a storm lantern and a pocket torch.",
      "gender": "male",
      "voiceRole": "companion",
      "age": 41
    },
    {
      "id": "mara",
      "name": "Mara Vale",
      "description": "Iona’s estranged sister, a mortuary restorer who recognizes altered sutures and refuses to mistake a corpse for an answer.",
      "gender": "female",
      "voiceRole": "companion",
      "age": 38
    },
    {
      "id": "iona",
      "name": "Iona Vale",
      "description": "The missing watchmaker whose recorded warnings survive inside broken clocks.",
      "gender": "female",
      "voiceRole": "witness",
      "age": 43
    },
    {
      "id": "agnes",
      "name": "Agnes Rook",
      "description": "A retired infirmary registrar who preserves erased adult patients’ identities.",
      "gender": "female",
      "voiceRole": "witness",
      "age": 68
    },
    {
      "id": "kit",
      "name": "Christopher “Kit” Venn",
      "description": "Iona’s adult apprentice, a former mine-rescue volunteer wearing the uniform in which the collectors last saw him.",
      "gender": "male",
      "voiceRole": "witness",
      "age": 29
    },
    {
      "id": "merrin",
      "name": "Merrin",
      "description": "A seamstress whose generosity concealed an old compromise.",
      "gender": "female",
      "voiceRole": "witness"
    },
    {
      "id": "king",
      "name": "The Iron King",
      "description": "The ancient keeper of the thirteenth lantern, wearing an empty crown.",
      "gender": "male",
      "voiceRole": "antagonist"
    },
    {
      "id": "merchant",
      "name": "The fox-masked merchant",
      "gender": "male",
      "voiceRole": "tempter",
      "description": "A market seller who turns abandoned memories into attractive bargains."
    },
    {
      "id": "conductor",
      "name": "The underground conductor",
      "gender": "male",
      "voiceRole": "collector",
      "description": "A formal attendant whose train carries people the town stops expecting."
    },
    {
      "id": "bea",
      "name": "Beatrice Venn",
      "gender": "female",
      "voiceRole": "adult-witness",
      "description": "Kit’s older sister, a festival worker whose disguise has begun stitching itself into her skin.",
      "age": 32
    },
    {
      "id": "widow",
      "name": "The Tallow Widow",
      "gender": "female",
      "voiceRole": "tragic-creature",
      "description": "A grieving candle seller transformed into the keeper of false doors."
    },
    {
      "id": "daniel",
      "name": "Daniel Rook, the Bellwrought",
      "gender": "male",
      "voiceRole": "tragic-creature",
      "description": "A caretaker transformed into a gaunt human nightmare whose throat-bell commands him to hunt."
    },
    {
      "id": "sexton",
      "name": "The Drowned Sexton",
      "gender": "male",
      "voiceRole": "ancient-witness",
      "description": "A drowned rescuer preserving the names the town’s bargain erased."
    },
    {
      "id": "cantor",
      "name": "The Hollow Cantor",
      "gender": "male",
      "voiceRole": "tragic-creature",
      "description": "A former infirmary music teacher whose hollow body contains the voices used to pacify abducted adults."
    },
    {
      "id": "stairbound",
      "name": "The Stairbound",
      "gender": "female",
      "voiceRole": "creature",
      "description": "An adult penitent broken across the manor chapel stairs, chained to the route she guards."
    },
    {
      "id": "chain-bearer",
      "name": "The Chain-Bearer",
      "gender": "female",
      "voiceRole": "creature",
      "description": "A former ward matron carrying the keys and lantern of the infirmary’s false refuge."
    }
  ],
  "passages": [
    {
      "id": "last-bus",
      "chapter": 1,
      "title": "The Last Bus to October",
      "art": "castle",
      "paragraphs": [
        "The bus leaves you beside a sign that reads OCTOBER, POPULATION 1,313. Beneath the official number, someone has scratched thirteen short strokes into the wood. The conductor calls it festival damage. His cuff is wet with blood, and a torn fingernail lies in the brass tray where tickets should be. He closes the door before you can ask whose hand it came from.",
        "Maple Lane glows with porch lanterns and masks. The adults walking toward the square wear mourning veils, cracked surgical faces and the elaborate costumes of people who can afford to be frightened for an evening. Behind a window, a woman holds a man still while another person sews his eyelids. When you stop, the pane shows only a cheerful dining room. The sewing needle is still tapping against the glass.",
        "Silas Reed meets you at the gate. He is forty-one, a railway engineer with a healed burn across his jaw and a storm lantern wired so the town cannot extinguish it remotely. Beside him stands Mara Vale, thirty-eight, a mortuary restorer carrying scissors, dressings and the letter her sister never answered. They do not ask your name. In October, a name spoken to the wrong listener can become an address for something that has learned to hunt.",
        "Iona Vale asked you to come. The watchmaker wrote that the thirteenth lantern did not cure grief; it removed the people whose existence made grief possible. Your own disputed inquest taught you how an institution can turn an absence into a clerical error. That is why you kept her letter. Tonight, Iona is missing, and the ink of her signature is lifting from the page like bruised skin.",
        "Christopher Venn, whom Iona called Kit, waits at the fountain. He is an adult apprentice and former mine-rescue volunteer. His brass helmet is gone. He remembers handing it to an attendant who promised to return his mother’s recorded voice. The attendant took the recording too. Kit followed the second procession until he saw what moved beneath its masks.",
        "At the infirmary, Agnes Rook shows you thirteen adult patient files. Factory hands, a night porter, a divorced woman nobody collected after surgery. Some were taken this year; some were taken before the staff now signing the forms were born. Every file has been amended to say that the patient left voluntarily. Below each amendment, a thumbprint remains in blood.",
        "Daniel Rook appears in an old staff photograph, standing beside his sister Agnes. In the next photograph his knees bend in the wrong direction. His jaw has been pulled forward until the skin beneath his eyes splits. In the last, he is a gaunt upright creature with exposed human patches, sparse hair, long nails and teeth packed into a face that was never built to hold them. No collar restrains him. A bell has grown inside his throat.",
        "Twelve lamps hang at Lantern Crescent. Above them waits an empty thirteenth hook, blackened by a heat that left the surrounding leaves untouched. The second procession approaches without footsteps. Its carriers hold letters beneath sleeves stiff with dried blood. Beyond the graveyard stands the Mourning Crown. Its windows are bright enough to show silhouettes moving in beds, and too bright to show who is holding them down.",
        "Something follows the bus after its lamps vanish. You hear nails strike the road in alternating pairs, then a pause while the creature rises onto its hind legs. Silas shields his lantern. In the brief darkness a human voice asks for help from the ditch. The same voice asks again from the roof above you. Neither speaker draws breath."
      ],
      "dialogue": [
        {
          "speaker": "silas",
          "text": "We can still choose where the next light points."
        },
        {
          "speaker": "mara",
          "text": "First, decide whom you are willing to notice when the town asks you to look away."
        }
      ],
      "choices": [
        {
          "id": "records",
          "label": "Investigate the names and the covered festival schedule",
          "consequence": "You keep Iona’s letter and ask Mara to help find evidence. The programme’s pleasant wording will not be allowed to answer for its missing guests.",
          "flags": [
            "opening-memory"
          ],
          "values": {
            "memory": 2,
            "mercy": 0,
            "courage": 1
          }
        },
        {
          "id": "children",
          "label": "Stay with Kit and protect the residents in the crowd",
          "consequence": "You make a space beside you for the frightened mine-rescuer. Silas gathers the younger costumed guests while you learn whom the festival is trying to overlook.",
          "flags": [
            "opening-mercy"
          ],
          "values": {
            "memory": 0,
            "mercy": 2,
            "courage": 1
          }
        },
        {
          "id": "procession",
          "label": "Confront the second procession before it reaches the hook",
          "consequence": "You step into the approaching masks’ path. Mara follows close enough to keep you in sight, and Silas turns his lantern outward toward their silent baskets.",
          "flags": [
            "opening-courage"
          ],
          "values": {
            "memory": 0,
            "mercy": 1,
            "courage": 2
          }
        }
      ]
    },
    {
      "id": "festival-records",
      "chapter": 2,
      "title": "The Market of Unfinished Names",
      "art": "widow",
      "paragraphs": [
        "At the moonlight market, a stall sells names in sealed jam jars. The labels offer brave names, fortunate names and names nobody has ever hurt. The merchant wears a painted fox mask. His breathing makes the jars tremble against one another. Mara finds several missing patients’ names written among the promises.",
        "A woman in a patchwork knight costume wants a name that will make her father recognize her. The merchant says recognition costs extra. Inside the jars are moments rather than mist: a bicycle lesson, a birthday candle, a resident waiting under a table during a thunderstorm. The woman points to the bicycle lesson. Her hand remains steady, although her eyes do not.",
        "In that drawer is Iona’s record of the old agreement. During a terrible winter, the town asked a benefactor called the Iron King to remove its sorrow. He offered a light that made the causes of grief harder to remember. What began with painful anniversaries became a way to remove inconvenient witnesses. Residents with nobody left to insist on their return were the latest payment.",
        "A fairground arch beside the market hides stairs to an underground platform. A motionless train waits below it. Its destination board reads HOME, but KEEPING shines through the painted letters. Thirteen passengers breathe behind drawn curtains. They are still alive.",
        "Iona’s measuring wire holds the train’s brake against a wheel. She delayed its departure before following the route toward the manor. The merchant’s jars are only one part of an arrangement that teaches the town not to expect its missing people back. Mara says the oldest covenant is kept in the manor, where someone can still answer for the terms.",
        "A torn casualty sheet names a foundry worker declared absent after an accident that killed him. His widow has initialled the correction three times. Beneath the third signature, the paper is stiff enough to crack. Mara recognizes the brown stain as blood from a wound reopened deliberately. Someone made the widow repeat her consent until her handwriting no longer looked frightened."
      ],
      "dialogue": [
        {
          "speaker": "merchant",
          "text": "If they cared to keep these things, why did they stop saying them?"
        },
        {
          "speaker": "mara",
          "text": "That is a question for the people who forgot. It is not consent from those they forgot."
        }
      ],
      "choices": [
        {
          "id": "labels",
          "label": "Read the stolen names where the whole market can hear",
          "consequence": "Several listeners remember faces they had called unfamiliar. The merchant closes his shutters, but the words have already crossed the square.",
          "flags": [
            "market-witnesses"
          ],
          "values": {
            "memory": 2,
            "mercy": 1,
            "courage": 1
          }
        },
        {
          "id": "knight",
          "label": "Help the knight reclaim her own memory",
          "consequence": "You make the merchant open the jar in front of witnesses. The woman remembers her address and chooses whom to ask for help.",
          "flags": [
            "knight-memory"
          ],
          "values": {
            "memory": 1,
            "mercy": 2,
            "courage": 0
          }
        },
        {
          "id": "brake",
          "label": "Hold the train while the passengers are named",
          "consequence": "You brace Iona’s wire beneath a timber. Silas marks the platform entrance, and Mara leads someone trustworthy down to keep watch.",
          "flags": [
            "train-held"
          ],
          "values": {
            "memory": 1,
            "mercy": 1,
            "courage": 2
          }
        }
      ]
    },
    {
      "id": "festival-children",
      "chapter": 2,
      "title": "Those Whose Shadows Were Taken",
      "art": "wolf",
      "paragraphs": [
        "Kit grips the dented buckle of his rescue coat. The attendant took his helmet while offering him his mother’s voice, then removed the voice from his memory as well. He is not confused about his age or his trade. He is terrified because he can still describe the exact shape of the recording machine, but cannot remember whether his mother ever said his name.",
        "He followed Iona to the manor. She told him the thirteen captives were alive, and that the original covenant never named them as payment. The Iron King had discovered that the town would tolerate anything so long as it was given a comforting explanation afterward. Kit saw a porter with his face pressed into a basin while an attendant read that explanation aloud.",
        "A man in a miner’s coat waits beside the fountain. His name is Felix. He is forty-eight and says the procession has not let him finish his shift. The lamp shows daylight through the back of his skull. He asks you to find his wife, then notices the wedding ring still stuck in the raw place where his finger used to be. The town applauds around him.",
        "The nearest dancers begin losing their shadows. Thin black strands pull from their heels toward the empty hook. The drum major tells them to keep smiling. Felix turns against the rhythm and points to the kitchen garden, where Kit’s sister Beatrice is screaming behind the fence.",
        "Beatrice is thirty-two. She used a scarecrow coat to hide from the attendants, but the fastening has tightened beneath her skin. Roots pass through both wrists. Mara checks her pulse before putting scissors to the seam. Silas heats a metal pick with his pocket torch, then lets it cool enough to work without burning the flesh around the knot.",
        "The gate to the manor opens wider as Beatrice’s blood touches the soil. Nobody in the crowd has to believe in ghosts to understand what is happening. They only have to keep watching while a woman is being dragged out of sight. You can recover testimony, protect the wounded, or break the procession’s discipline. Each will leave something else unattended.",
        "The roots beneath Beatrice’s wrist flex against Mara’s scissors. One breaks with the resistance of a tendon. Beatrice vomits onto her festival coat, then asks whether she will keep the hand. Mara answers that she does not know. The honest uncertainty frightens the crowd more than the attendants do. Several spectators retreat into their bright houses and lock the doors."
      ],
      "dialogue": [
        {
          "speaker": "bea",
          "text": "It knows where I end. Every time I pull, it takes another piece."
        },
        {
          "speaker": "silas",
          "text": "Keep looking at me. Mara needs you still, not brave."
        }
      ],
      "choices": [
        {
          "id": "remember",
          "label": "Make the crowd repeat every captive’s name",
          "consequence": "Felix becomes a person the other residents can expect to see again. Kit and Bea repeat his name until it belongs to the crowd.",
          "flags": [
            "children-naming"
          ],
          "values": {
            "memory": 2,
            "mercy": 1,
            "courage": 0
          }
        },
        {
          "id": "release",
          "label": "Help Mara extract Beatrice from the binding",
          "consequence": "You talk about ordinary mornings while the knot loosens. The younger guests follow Silas toward the infirmary instead of the silent manor.",
          "flags": [
            "children-gathered"
          ],
          "values": {
            "memory": 0,
            "mercy": 2,
            "courage": 1
          }
        },
        {
          "id": "reverse",
          "label": "Break the procession and lead the wounded out",
          "consequence": "The residents follow your terrible marching step. Their shadows shorten as the festival’s perfect rhythm breaks, and the drum major loses his obedient audience.",
          "flags": [
            "parade-reversed"
          ],
          "values": {
            "memory": 1,
            "mercy": 1,
            "courage": 2
          }
        }
      ]
    },
    {
      "id": "festival-collectors",
      "chapter": 2,
      "title": "The Guests Who Carried Empty Faces",
      "art": "widow",
      "paragraphs": [
        "The second procession reaches Lantern Crescent without a footstep. Its costumes are exquisite, stitched with pearls and old lace. They move as if carried by people who learned walking from a description. One mask tips toward you, waiting for a name you refuse to offer.",
        "The baskets hold unposted letters from residents who were told to wait patiently. Mara reads one addressed to a grandmother. Another asks whether being very good will make the visit end sooner. No letter agrees to become a lantern. The guests' beautiful sleeves conceal wrists made of tightly folded paper.",
        "From the festival kitchen comes the smell of cocoa. A cook in a harvest-witch costume pours thirteen cups without checking how many residents are present. Her hands remain steady, but the ladle shakes. Behind the oven, a wet footprint points to a painted door. On a recipe card, Mara finds instructions for making people forget a name: repeat a pleasant story, reward agreement and keep the bells loud.",
        "The cook says she used to feed the missing patients. Tonight she cannot remember whether she fed them before or after they disappeared. She tells you Iona went to the manor seeking the original covenant. It belonged to the Iron King, who first promised the town relief from a deadly winter. The residents are alive in his keeping, but their futures are feeding the light above his castle.",
        "At a candle counter, a veiled widow watches your questions. Her reflection shows a waxen face and an open chest full of little flames. She was promised a door to her lost husband. While she waits for it, her hooked fingers hold open the doors through which other people vanish.",
        "The Tallow Widow’s lantern shows her face for an instant. Wax has filled the holes where her ears should be, but the skin around her mouth is unmistakably human. A flame bends toward each person who accepts her comfort. When one man withdraws his hand, a strip of skin remains on the lantern handle. She apologizes without letting him go."
      ],
      "dialogue": [
        {
          "speaker": "widow",
          "text": "Hope kept too long can become a room with no handle on the inside."
        },
        {
          "speaker": "mara",
          "text": "We have come to find the people, not another beautiful explanation for losing them."
        }
      ],
      "choices": [
        {
          "id": "letters",
          "label": "Read the letters aloud to the festival crowd",
          "consequence": "The paper guests lose their perfect posture. Real listeners hear what the patient residents were asking before the town learned not to notice.",
          "flags": [
            "letters-witnessed"
          ],
          "values": {
            "memory": 2,
            "mercy": 1,
            "courage": 1
          }
        },
        {
          "id": "widow",
          "label": "Ask the widow to release one captive door",
          "consequence": "You call its unseen occupant a person rather than a flame. The widow hesitates, and one doorway begins to close safely.",
          "flags": [
            "widow-mercy"
          ],
          "values": {
            "memory": 1,
            "mercy": 2,
            "courage": 0
          }
        },
        {
          "id": "procession",
          "label": "Pass through the collectors and enter the manor",
          "consequence": "You keep the guests’ masks facing your lantern while Mara follows the gap. Their courteous welcome turns cold when nobody offers a name.",
          "flags": [
            "collectors-defied"
          ],
          "values": {
            "memory": 1,
            "mercy": 0,
            "courage": 2
          }
        }
      ]
    },
    {
      "id": "manor-guestbook",
      "chapter": 3,
      "title": "The Guestbook Without a Host",
      "art": "castle",
      "paragraphs": [
        "The manor’s gate stands open. Its iron pumpkins have no faces, only keyholes. In the vestibule, a guestbook waits on a pedestal beneath a chandelier of extinguished candles. The pages are filled with signatures written by the same hand.",
        "A note tucked beneath the pen says the house must receive a guest before it can dismiss one. Beside it lies an old resident’s drawing of a door opening both ways. You look more closely at the identical signatures. They belong to people who arrived under borrowed names and were never permitted to leave under their own.",
        "The guestbook’s spine is warm. Opening it separates two pages stuck together by a clot, and the smell of an old operating room rises from the gutter. Each signature has a small depression beside it, deep enough for a fingertip. The most recent depression contains a nail. Mara turns the book with her dressing forceps. Nobody touches the paper bare-handed again."
      ],
      "dialogue": [
        {
          "speaker": "mara",
          "text": "Being invited is different from being allowed to go home."
        }
      ],
      "choices": [
        {
          "id": "witness",
          "label": "Sign only as a witness",
          "consequence": "The pen scratches without ink until you refuse its suggested name. A small opening appears in the page’s elaborate border.",
          "flags": [
            "witness-signed"
          ],
          "values": {
            "memory": 2,
            "mercy": 0,
            "courage": 1
          }
        },
        {
          "id": "drawing",
          "label": "Place the resident’s drawing over the page",
          "consequence": "The painted door interrupts the signatures. Somewhere in the house a real latch moves for the first time in years.",
          "flags": [
            "door-drawing"
          ],
          "values": {
            "memory": 1,
            "mercy": 2,
            "courage": 0
          }
        },
        {
          "id": "refuse",
          "label": "Leave the pen and cross the threshold",
          "consequence": "You enter without offering the house a version of yourself. Its welcome becomes a cold breath following your shoulders.",
          "flags": [
            "guestbook-refused"
          ],
          "values": {
            "memory": 0,
            "mercy": 0,
            "courage": 2
          }
        }
      ]
    },
    {
      "id": "coatroom-faces",
      "chapter": 3,
      "title": "What the Guests Left Behind",
      "art": "castle",
      "paragraphs": [
        "A caretaker’s ordinary coat hangs by itself. Its shoulders have split. One sleeve extends below the floor, threaded through a hole in the boards. As you watch, the fabric jerks slowly downward. Mara places her scissors on a shelf rather than cutting immediately. Something inside the sleeve is holding back the thing beneath it.",
        "Pinned to the coat is a disciplinary letter. The caretaker once refused to deliver a patient to the manor. The council ordered him to return, dressed for the procession. The bell that transformed him was described as a reward for loyalty. Beneath the formal signature, he wrote his own name: Daniel Rook.",
        "A coat hangs from a hook at shoulder height although nobody stands inside it. Its sleeves twitch when Mara approaches. Beneath the collar, a shaved patch of skin still bears the pattern of a hospital wristband. Silas cuts the lining free and exposes a row of names stitched into living tissue. The coat begs him to put the needle back."
      ],
      "dialogue": [
        {
          "speaker": "silas",
          "text": "They made a punishment sound like a prize. That does not make him their creature."
        }
      ],
      "choices": [
        {
          "id": "daniel",
          "label": "Keep Daniel’s letter as testimony",
          "consequence": "You read the refusal twice before folding it. His name deserves more than a warning about the shape he became.",
          "flags": [
            "daniel-testimony"
          ],
          "values": {
            "memory": 2,
            "mercy": 1,
            "courage": 0
          }
        },
        {
          "id": "sleeve",
          "label": "Help the sleeve hold the opening shut",
          "consequence": "You fasten the cloth to the heavy rail. The trembling sleeve stills, and the boards beneath it stop lifting.",
          "flags": [
            "coatroom-secured"
          ],
          "values": {
            "memory": 0,
            "mercy": 1,
            "courage": 2
          }
        },
        {
          "id": "costumes",
          "label": "Lay the residents’ costumes within reach",
          "consequence": "You lower the hooks carefully. If their owners return tonight, nobody will have to beg the house for their own belongings.",
          "flags": [
            "costumes-returned"
          ],
          "values": {
            "memory": 1,
            "mercy": 2,
            "courage": 0
          }
        }
      ]
    },
    {
      "id": "portrait-winter",
      "chapter": 3,
      "title": "The Winter Painted Over",
      "art": "castle",
      "paragraphs": [
        "A family portrait hangs above the drawing-room hearth. Its cheerful autumn background has cracked, exposing snow beneath. You can see a frozen river, a row of shuttered cottages and people carrying blankets toward this house. The painter covered their faces with pumpkins.",
        "In the portrait, the manor’s owner holds an iron crown instead of a lantern. He was called the Iron King by the residents because he repaired their sledges. The title once sounded affectionate. At his side stands a woman whose hand has been painted around somebody who is no longer visible.",
        "A diary beneath the mantel describes the terrible winter. The town’s people asked for the pain to end. The King found a light that could remove sorrow by removing what caused it to be remembered. His own daughter was the first absence. Nobody in the house could agree on her name after sunrise.",
        "Nell was twenty-four when the river took her. The portrait refuses to preserve that fact. Each time you look away, it gives her a younger face, offering her father a version too helpless to contradict him. Mara scratches her actual age onto the brass frame. The painted mouth opens. A sound comes from it like water draining through a damaged lung."
      ],
      "dialogue": [
        {
          "speaker": "mara",
          "text": "He may have begun with grief. He kept going after he knew the cost."
        }
      ],
      "choices": [
        {
          "id": "winter",
          "label": "Expose the snow beneath the paint",
          "consequence": "You reveal the frightened town without beautifying it. Silas holds the lantern steady while the old river comes back into view.",
          "flags": [
            "winter-revealed"
          ],
          "values": {
            "memory": 2,
            "mercy": 0,
            "courage": 1
          }
        },
        {
          "id": "daughter",
          "label": "Search the diary for his daughter’s name",
          "consequence": "A margin preserves one syllable, Nell. You keep the uncertainty rather than inventing the rest of her to comfort him.",
          "flags": [
            "nell-fragment"
          ],
          "values": {
            "memory": 2,
            "mercy": 2,
            "courage": 0
          }
        },
        {
          "id": "crown",
          "label": "Remove the iron crown from its shelf",
          "consequence": "The crown is lighter than it appears. A space inside its rim fits no human head, only a narrow glass chimney.",
          "flags": [
            "crown-examined"
          ],
          "values": {
            "memory": 1,
            "mercy": 0,
            "courage": 2
          }
        }
      ]
    },
    {
      "id": "thirteenth-plate",
      "chapter": 3,
      "title": "Dinner for an Absent Guest",
      "art": "castle",
      "paragraphs": [
        "The dining room is laid for thirteen. The first twelve plates contain ordinary festival food. The thirteenth holds a spoon polished until its bowl reflects no face at all. Beside it, a place card reads THE PERSON WE CAN SPARE.",
        "A ledger sits beneath the sideboard. The earliest entries offered broken promises, painful anniversaries and the memory of ruined harvests. Later entries offered inconvenient witnesses. Only afterward did the handwriting begin listing residents whose relatives had died or moved away.",
        "The empty place has not been laid for a guest. A groove around the plate drains into the wall, and the chair’s arms carry the polished marks of restraint straps. Under the table, someone has scratched I AM STILL HERE in the underside of the wood. The final word trails into gouges made without a tool. Silas stops calling this room a dining room. Beside the plate, a servant’s note names the intended recipient of a bread packet hardened into stone."
      ],
      "dialogue": [
        {
          "speaker": "mara",
          "text": "Someone tried to help in secret. Imagine if they had been willing to help together."
        }
      ],
      "choices": [
        {
          "id": "ledger",
          "label": "Read the ledger without closing it",
          "consequence": "You leave the evidence on the table, where the next guest cannot miss what the gracious dinner was built to conceal.",
          "flags": [
            "dinner-ledger"
          ],
          "values": {
            "memory": 2,
            "mercy": 1,
            "courage": 0
          }
        },
        {
          "id": "bread",
          "label": "Carry the servant’s bread to the sleepers",
          "consequence": "You take the packet as a promise of care, not food that could still feed anyone. Silas understands the difference.",
          "flags": [
            "servant-kindness"
          ],
          "values": {
            "memory": 1,
            "mercy": 2,
            "courage": 0
          }
        },
        {
          "id": "place",
          "label": "Break the thirteenth place setting",
          "consequence": "The blank spoon bends beneath your hand. The table shudders as if a host has finally heard an unwelcome guest.",
          "flags": [
            "spare-place-broken"
          ],
          "values": {
            "memory": 0,
            "mercy": 0,
            "courage": 2
          }
        }
      ]
    },
    {
      "id": "stairs-listen",
      "chapter": 3,
      "title": "The Staircase That Listens",
      "art": "stairbound",
      "paragraphs": [
        "The stairs climb past three landings, though the manor has only two upper floors. Each landing contains a door marked with an ordinary family name. The handles turn toward your fingers before you touch them. Behind the nearest door, someone is making the breakfast you most miss.",
        "Under the stair runner, the wood is covered with directions scratched by former guests. None says which door to choose. Every message says the same practical thing in different handwriting: keep someone else where you can see them. The house cannot make its offers sound alike, so it tries to separate the listeners.",
        "The woman on the chapel stair comes down on her hands, dragging both chained feet behind her. Her shoulders turn further than shoulders should. A lantern above the landing shows long teeth pushing through the torn corners of her mouth. She pauses beside a dry bloodstain and brushes it with a fingernail. The gesture is careful, almost ashamed. Then she looks directly at you."
      ],
      "dialogue": [
        {
          "speaker": "silas",
          "text": "I want to hear it again. That is how I know I should not go alone."
        }
      ],
      "choices": [
        {
          "id": "hands",
          "label": "Keep everyone’s hands linked",
          "consequence": "You climb awkwardly together. The beloved sounds fade into the same thin whistle, and the doors become less certain of their welcome.",
          "flags": [
            "companions-linked"
          ],
          "values": {
            "memory": 0,
            "mercy": 2,
            "courage": 0
          }
        },
        {
          "id": "marks",
          "label": "Add a clear warning for the next guests",
          "consequence": "You write where the runner cannot cover it. A future visitor will know the seductive doors are part of the danger.",
          "flags": [
            "stair-warning"
          ],
          "values": {
            "memory": 2,
            "mercy": 1,
            "courage": 0
          }
        },
        {
          "id": "answer",
          "label": "Tell the house what you came to do",
          "consequence": "You name the residents instead of your own longing. The staircase shortens, leaving the house fewer places to make you wait.",
          "flags": [
            "purpose-spoken"
          ],
          "values": {
            "memory": 1,
            "mercy": 0,
            "courage": 2
          }
        }
      ]
    },
    {
      "id": "iona-workroom",
      "chapter": 3,
      "title": "Iona’s Interrupted Work",
      "art": "castle",
      "paragraphs": [
        "The thirteenth lantern does not burn fuel. It burns the difference between what happened and what people are willing to acknowledge. Iona believed it could be starved if the town carried its memories honestly. But its keeper can survive without the town for a little while, using the missing residents as a reserve.",
        "A hurried final note says she went below the graveyard to find the oldest witness. The desk clock ticks again when you uncover the page. From its open casing comes a sound like someone trying to speak through water. Iona had begun recording a voice older than the manor itself.",
        "Iona’s tools lie beside three dressings that have hardened into the shapes of her fingers. She has been using her own blood to keep the clock from accepting someone else’s. The bargain has not made her invulnerable. Every surface within reach bears a different attempt to steady a shaking hand. Mara picks up the newest dressing and realizes her sister may still be bleeding."
      ],
      "dialogue": [
        {
          "speaker": "iona",
          "text": "Do not mistake understanding a machine for understanding the people caught inside it."
        }
      ],
      "choices": [
        {
          "id": "diagram",
          "label": "Keep Iona’s lantern diagram",
          "consequence": "You learn where the light draws its strength. The missing residents become people to protect, never merely a way to weaken it.",
          "flags": [
            "lantern-understood"
          ],
          "values": {
            "memory": 2,
            "mercy": 1,
            "courage": 0
          }
        },
        {
          "id": "recording",
          "label": "Listen to the waterlogged voice",
          "consequence": "The broken recording asks for a bell that cannot summon. Mara recognizes the request as a plea, not an instruction.",
          "flags": [
            "sexton-recording"
          ],
          "values": {
            "memory": 2,
            "mercy": 2,
            "courage": 0
          }
        },
        {
          "id": "follow",
          "label": "Follow Iona’s descent marks",
          "consequence": "Silas finds the chalk arrows beneath the convalescent ward door. You leave the room ready for its owner to return.",
          "flags": [
            "iona-followed"
          ],
          "values": {
            "memory": 0,
            "mercy": 1,
            "courage": 2
          }
        }
      ]
    },
    {
      "id": "bellwrought-room",
      "chapter": 3,
      "title": "The Room Daniel Could Not Leave",
      "art": "wolf",
      "paragraphs": [
        "A door beneath the stairs has been clawed from the inside. Beyond it, a long human-shaped creature crouches among splintered chairs. Its spine rises in an unnatural arch. Sparse strands of dark hair cling to pale skin pulled across lengthened limbs. There is no collar, only a bell growing painfully beneath the throat.",
        "Beside the door, an infirmary exercise book preserves Daniel’s repairs and refusals in Agnes’s handwriting. Mara opens it with her forceps. The creature hides its face as she approaches, like a person ashamed of being seen.",
        "His protruding jaw trembles around crowded teeth. Bulging eyes follow Mara’s forceps. When the bell sounds inside his throat, a clot drops from his mouth. Human skin stretches between sparse strands of hair. No collar restrains him. The punishment is still happening."
      ],
      "dialogue": [
        {
          "speaker": "daniel",
          "text": "When it rings, go where I cannot hear your heart."
        }
      ],
      "choices": [
        {
          "id": "book",
          "label": "Read the kind caretaker’s account aloud",
          "consequence": "For a little while, Daniel follows Agnes’s account instead of the bell. You give his human memory a shape to hold.",
          "flags": [
            "daniel-grounded"
          ],
          "values": {
            "memory": 2,
            "mercy": 2,
            "courage": 0
          }
        },
        {
          "id": "muffle",
          "label": "Muffle the bell with the loose curtain",
          "consequence": "You move close enough to feel his fever. The heavy cloth softens the trembling note, buying everyone a dangerous minute.",
          "flags": [
            "bell-muffled"
          ],
          "values": {
            "memory": 0,
            "mercy": 1,
            "courage": 2
          }
        },
        {
          "id": "open",
          "label": "Leave the door open behind you",
          "consequence": "You refuse to make his prison more secure. Mara warns him where the residents are sheltered before you withdraw carefully.",
          "flags": [
            "daniel-door-open"
          ],
          "values": {
            "memory": 1,
            "mercy": 1,
            "courage": 2
          }
        }
      ]
    },
    {
      "id": "cellar-covenant",
      "chapter": 3,
      "title": "The Agreement Under the Floor",
      "art": "stairbound",
      "paragraphs": [
        "The cellar smells of wet iron and old apples. A covenant has been nailed beneath a beam, where later alterations to the house would not disturb it. Its signatories promised the Iron King a willing remembrance each Halloween, so the terrible winter would never return.",
        "The promise was supposed to be shared. No sentence names residents. Between its original lines, another hand added clauses about substitutions and unpaid grief. Every amendment is dated after someone complained that remembering hurt too much.",
        "Under the chapel floor, the Stairbound’s chain passes through a hole worn smooth by years of dragging. An old ward schedule labels the restraint PROTECTIVE CARE. The phrase repeats above every missing signature. Mara finds the first authorization in a different hand from the later renewals. Someone made a terrible decision once. Other people made it ordinary by copying it."
      ],
      "dialogue": [
        {
          "speaker": "mara",
          "text": "There is the first promise. There is what they made it mean. We must answer both."
        }
      ],
      "choices": [
        {
          "id": "original",
          "label": "Preserve the original covenant",
          "consequence": "You separate its first promise from the later excuses. The town will have to face what it agreed to and what it chose afterward.",
          "flags": [
            "original-covenant"
          ],
          "values": {
            "memory": 2,
            "mercy": 1,
            "courage": 0
          }
        },
        {
          "id": "tokens",
          "label": "Gather the abandoned tokens together",
          "consequence": "Silas helps arrange them where no ribbon or button is lost beneath another. Small private memories become a public witness.",
          "flags": [
            "tokens-gathered"
          ],
          "values": {
            "memory": 1,
            "mercy": 2,
            "courage": 0
          }
        },
        {
          "id": "tunnel",
          "label": "Take the tunnel toward the wet bell",
          "consequence": "You enter before the cellar door can settle shut. The lantern flame leans toward the sound, unwilling but steady.",
          "flags": [
            "grave-road"
          ],
          "values": {
            "memory": 0,
            "mercy": 0,
            "courage": 2
          }
        }
      ]
    },
    {
      "id": "grave-count",
      "chapter": 4,
      "title": "The Graveyard’s Unfinished Count",
      "art": "sexton",
      "paragraphs": [
        "The graveyard lies beyond the manor’s oldest wall. Its iron gate opens into a hollow where autumn leaves settle without rustling. Every grave has a small stone lantern. Some hold candles. Others contain a photograph folded so that nobody can see the face.",
        "You find thirteen recent markers in a row. Each says ONLY A RESIDENT, though the ground beneath them has never been broken. These are not graves for bodies. They are places for the town to put its questions, so that it can act as if the matter has been settled. Mara presses her palm against one stone. She can feel someone knocking from much farther below.",
        "On the gate hangs an infirmary bell, wrapped in a strip of Iona’s red scarf. Somebody wanted to mark the descent without summoning whatever listens beneath it.",
        "The Drowned Sexton lifts a ledger against his chest. Water slips between ribs exposed beneath his ruined coat. The writing remains dry. At the bottom of the last page, a thumbprint has been pressed so hard that a crescent of skin still adheres to it. The sexton watches you notice. He closes the cover gently, as though a violent motion might finish killing its owner."
      ],
      "dialogue": [
        {
          "speaker": "mara",
          "text": "They are alive. A memorial is not permission to stop looking."
        }
      ],
      "choices": [
        {
          "id": "names",
          "label": "Replace the empty phrases with names",
          "consequence": "You make the markers tell the truth about their missing owners. Silas’s torch flame steadies beside each newly legible name.",
          "flags": [
            "false-graves-named"
          ],
          "values": {
            "memory": 2,
            "mercy": 2,
            "courage": 0
          }
        },
        {
          "id": "bell",
          "label": "Leave the wrapped bell safely silent",
          "consequence": "You secure the scarf and mark the path with fallen stones. The next traveler can follow without calling anything from below.",
          "flags": [
            "silent-descent"
          ],
          "values": {
            "memory": 1,
            "mercy": 1,
            "courage": 0
          }
        },
        {
          "id": "knocking",
          "label": "Answer the distant knocking",
          "consequence": "You strike the stone in the residents’ rhythm. After a long pause, an uneven chorus answers from beneath the roots.",
          "flags": [
            "children-answered"
          ],
          "values": {
            "memory": 0,
            "mercy": 1,
            "courage": 2
          }
        }
      ]
    },
    {
      "id": "sexton-water",
      "chapter": 4,
      "title": "The Keeper of the Drowned Names",
      "art": "sexton",
      "paragraphs": [
        "At the foot of the graveyard, a flooded chapel holds water black enough to reflect stars that are not overhead. A tall figure stands inside it, wrapped in the remains of a sexton’s coat. Reeds pass through his ribs. Water pours from his sleeves without lowering the pool.",
        "The Drowned Sexton keeps a book chained to his wrist. Its pages are heavy slabs of slate, covered with names written before the town learned to forget. He says the winter was real. The river broke its banks. People died while neighbors argued over whose gate should be opened first. The King’s daughter was among them.",
        "His chains run through a bell beneath the water. Each ringing forces him to repeat the false story of a miraculous rescue. He looks at your lantern with the exhausted hope of someone who has explained the truth many times.",
        "The water at the sexton’s feet has no reflection. When he raises his ruined hand, it rises around the fingers as though remembering the river that first closed over him. Mara asks which shore he needs to reach. The question stops the dripping for a moment. Nobody has asked him about a destination since the ledger made him responsible for every drowning except his own."
      ],
      "dialogue": [
        {
          "speaker": "sexton",
          "text": "A name is not a cure. It is the place where a cure must begin."
        }
      ],
      "choices": [
        {
          "id": "slate",
          "label": "Listen to the names on the slate",
          "consequence": "You let him finish without hurrying the sorrow. Nell’s name reaches the surface, and the chapel water briefly becomes clear.",
          "flags": [
            "winter-names"
          ],
          "values": {
            "memory": 2,
            "mercy": 2,
            "courage": 0
          }
        },
        {
          "id": "chain",
          "label": "Loosen the chain from the submerged bell",
          "consequence": "Silas lights the flooded steps while you work. The Sexton’s wrist rises freely, and his next words belong to him alone.",
          "flags": [
            "sexton-unbound"
          ],
          "values": {
            "memory": 0,
            "mercy": 2,
            "courage": 2
          }
        },
        {
          "id": "truth",
          "label": "Ask for testimony the town can hear",
          "consequence": "He scratches his account onto a portable piece of slate. Mara wraps it carefully, refusing to call the witness a relic.",
          "flags": [
            "sexton-testimony"
          ],
          "values": {
            "memory": 2,
            "mercy": 1,
            "courage": 1
          }
        }
      ]
    },
    {
      "id": "cantor-threshold",
      "chapter": 4,
      "title": "The Choir With One Empty Throat",
      "art": "cantor",
      "paragraphs": [
        "The road beneath the graveyard passes through a chapel vestibule. Its doorways form a mouth-shaped arch, and the air vibrates before you hear a note. A robed figure waits under it, his chest opened into a hollow chamber of thin white ribs.",
        "The Hollow Cantor sings in the voices of people the town has lost. Each verse promises that another offering will make the old disaster right. Mara recognizes the tune, but the melody changes its ending whenever it approaches a painful word. It is a lullaby trained to avoid waking anybody.",
        "Among the stolen voices you hear Iona, still alive and calling from the castle. The Cantor cannot sing her whole warning. He keeps returning to its first word, which is not help. It is remember.",
        "The Cantor’s throat opens below his chin, a vertical seam that reveals small movements where no tongue should be. Different voices emerge from different depths. One adult patient asks for a blanket. Another keeps reciting a date. The lullaby attempts to cover them both, and fails. Mara listens until she can distinguish the requests, then writes them separately rather than calling them a chorus."
      ],
      "dialogue": [
        {
          "speaker": "cantor",
          "text": "If you finish the song, let its last line say what happened."
        }
      ],
      "choices": [
        {
          "id": "verse",
          "label": "Give the lullaby its honest final verse",
          "consequence": "You speak the winter’s loss without turning it into punishment. The choir finds an ending, and several stolen voices fall silent peacefully.",
          "flags": [
            "honest-song"
          ],
          "values": {
            "memory": 2,
            "mercy": 2,
            "courage": 0
          }
        },
        {
          "id": "discord",
          "label": "Break the song’s obedient rhythm",
          "consequence": "You strike the stone out of time. Silas joins your rough beat until the lantern no longer breathes with the Cantor.",
          "flags": [
            "choir-disrupted"
          ],
          "values": {
            "memory": 0,
            "mercy": 1,
            "courage": 2
          }
        },
        {
          "id": "iona",
          "label": "Follow Iona’s word through the music",
          "consequence": "You listen past the offered comfort. The living voice points toward the castle, while Mara holds you steady against the easier tune.",
          "flags": [
            "iona-heard"
          ],
          "values": {
            "memory": 2,
            "mercy": 1,
            "courage": 1
          }
        }
      ]
    },
    {
      "id": "bone-orchard",
      "chapter": 4,
      "title": "Apples That Remember Teeth",
      "art": "sexton",
      "paragraphs": [
        "The underground road rises into an orchard planted between the cemetery and the river. Its trees bear red apples out of season. Fine roots crawl across the path toward the manor, as if the whole garden is trying to return home.",
        "A scarecrow at the far fence turns its wooden head. Its coat is caught among the roots. When you step closer, it raises a hand to warn you back from a tree whose trunk is slowly forming an open eye.",
        "A root lifts from the soil carrying three human teeth. The smallest still has a gold filling. Silas recognizes the filling from a railway compensation photograph and kneels without touching the root. The orchard has been fed people whose deaths were made inconvenient. To gather its fruit without naming them would repeat the same theft in a gentler form."
      ],
      "dialogue": [
        {
          "speaker": "silas",
          "text": "Being a whole person means more than keeping the happiest pieces."
        }
      ],
      "choices": [
        {
          "id": "all",
          "label": "Gather both tender and painful memories",
          "consequence": "You carry what the residents will need without choosing their feelings for them. The roots release several apples into your careful hands.",
          "flags": [
            "whole-memories"
          ],
          "values": {
            "memory": 2,
            "mercy": 2,
            "courage": 0
          }
        },
        {
          "id": "scarecrow",
          "label": "Free the warning scarecrow from the roots",
          "consequence": "Mara cuts the binding cloth, not the living wood. Its hand lowers, revealing a safer crossing marked beneath the grass.",
          "flags": [
            "orchard-guide"
          ],
          "values": {
            "memory": 1,
            "mercy": 2,
            "courage": 0
          }
        },
        {
          "id": "eye",
          "label": "Stand between the opening eye and your friends",
          "consequence": "You cover its view with your coat. The tree presses against the fabric while Silas guides everyone past its listening roots.",
          "flags": [
            "orchard-watch-defied"
          ],
          "values": {
            "memory": 0,
            "mercy": 1,
            "courage": 2
          }
        }
      ]
    },
    {
      "id": "unclaimed-room",
      "chapter": 4,
      "title": "The Waiting Room of the Unclaimed",
      "art": "chainbearer",
      "paragraphs": [
        "Below the cemetery office is a waiting room with thirteen wooden chairs. The walls are covered in cheerful instructions for residents whose families are late. Each instruction ends by asking them to be patient. The plaster beneath the oldest notice has worn away under years of fingernails.",
        "An attendant’s desk holds unposted letters. Some ask why a grandmother has not come. Others describe a costume prize, or say that the writer has been very good. None asks to become a lantern. None agrees to be forgotten.",
        "You recognize a drawing of the mine-rescuer’s brass rescue helmet. Kit was brought here once, then escaped while Iona argued with the attendants. The record calls his escape a disturbance. Mara turns the register sideways and shows you how each complaint has been filed as evidence that the residents were unsuitable guests.",
        "The ward matron stands at the end of the room, one hand wrapped around a chain and the other holding a lantern. Her robe brushes the floor. Long fingers close over the keys at her waist when Mara asks who is being kept safe. The matron bares teeth that have split her lower lip. Behind her, every bed has a lock mounted on its outer rail."
      ],
      "dialogue": [
        {
          "speaker": "mara",
          "text": "Nobody gets to call this kindness because the chairs were painted nicely."
        }
      ],
      "choices": [
        {
          "id": "letters",
          "label": "Carry the letters back to their intended readers",
          "consequence": "You keep each envelope with its writer’s name. These small requests will reach the people who were persuaded there was nothing to answer.",
          "flags": [
            "letters-carried"
          ],
          "values": {
            "memory": 2,
            "mercy": 2,
            "courage": 0
          }
        },
        {
          "id": "register",
          "label": "Correct the register’s false descriptions",
          "consequence": "Disturbance becomes escape. Unsuitable becomes frightened. You make the official language acknowledge what an ordinary reader can plainly see.",
          "flags": [
            "register-corrected"
          ],
          "values": {
            "memory": 2,
            "mercy": 0,
            "courage": 1
          }
        },
        {
          "id": "door",
          "label": "Open the waiting room’s locked exit",
          "consequence": "You leave no sign telling the next resident to be patient. Mara wedges the door so it cannot close behind them.",
          "flags": [
            "waiting-room-open"
          ],
          "values": {
            "memory": 0,
            "mercy": 2,
            "courage": 2
          }
        }
      ]
    },
    {
      "id": "river-letter",
      "chapter": 4,
      "title": "A Letter From Before the Flood",
      "art": "widow",
      "paragraphs": [
        "At the river, an old toll house remains above the broken bridge. Its windows hold paper stars, faded almost transparent. Inside, a sealed letter waits in a dry tin beneath the floor. The handwriting belongs to the King’s daughter.",
        "Nell wrote it before the winter. She planned to ask her father to make lanterns for every crossing, so people could find one another in bad weather. She was proud that the residents called him a king, and worried that he would start believing kings did not need to listen.",
        "Across the river, the castle’s high windows resemble a row of extinguished matches. Something enormous moves behind their glass. Silas points to a shallow crossing below the bridge, where old stepping stones are still visible under the current.",
        "Nell’s letter has softened where river water entered the envelope. The pressure of her pen remains legible on the sheet beneath it. She was an adult making plans her father disliked, not an unfinished life that belonged to him. Reading her ordinary intentions beside the description of her body changes the room. The Iron King’s grief loses its right to speak for her."
      ],
      "dialogue": [
        {
          "speaker": "silas",
          "text": "He has been keeping her memory so tightly that he stopped keeping her words."
        }
      ],
      "choices": [
        {
          "id": "nell",
          "label": "Preserve Nell’s letter intact",
          "consequence": "You do not rewrite her kindness into approval. Her father will have to hear the whole letter, including the part about listening.",
          "flags": [
            "nell-letter"
          ],
          "values": {
            "memory": 2,
            "mercy": 1,
            "courage": 0
          }
        },
        {
          "id": "crossing",
          "label": "Mark the crossing for those who follow",
          "consequence": "Mara ties bright cloth where the shallow stones begin. The route to the castle becomes something the town can share.",
          "flags": [
            "crossing-marked"
          ],
          "values": {
            "memory": 0,
            "mercy": 2,
            "courage": 1
          }
        },
        {
          "id": "light",
          "label": "Point your lantern across the water",
          "consequence": "For a moment, the castle answers with a narrow red glow. You keep the flame facing it instead of turning away.",
          "flags": [
            "castle-challenged"
          ],
          "values": {
            "memory": 1,
            "mercy": 0,
            "courage": 2
          }
        }
      ]
    },
    {
      "id": "quiet-coffin",
      "chapter": 4,
      "title": "The Coffin That Held a Voice",
      "art": "sexton",
      "paragraphs": [
        "A wooden coffin rests in a small roadside vault. Its lid is secured with an infirmary belt instead of nails. The inscription calls its occupant a devoted servant. Mara finds a second inscription underneath, written in a hurried hand: DO NOT LET THEM MAKE HIM RING.",
        "Silas places his lantern close. You hear a man asking to take a frightened patient home. He knows refusing will cost him his job. He refuses anyway. The words repeat only once, with none of the mechanical cheerfulness of the festival.",
        "A scrape sounds beyond the vault. The Bellwrought is moving along the road, following something older than hunger. His nails catch the stone. He cannot fit through the small doorway without hurting himself, but he waits just outside it, trembling at the sound of his own lost answer.",
        "Inside the coffin, a clapper hangs above an indentation shaped like a forehead. It would be possible to call the mechanism a warning system if you did not examine the restraint buckles. A warning given by someone unable to leave is also a demand. Mara removes one buckle and keeps it as evidence. The bell rings once, although nobody has moved the rope."
      ],
      "dialogue": [
        {
          "speaker": "daniel",
          "text": "Let me say no. Even if they do not listen, let it be mine."
        }
      ],
      "choices": [
        {
          "id": "return",
          "label": "Return the refusing voice to Daniel",
          "consequence": "You leave the wrapped clapper within his reach. His long hands move with terrible care, and the buried refusal enters the night.",
          "flags": [
            "daniel-voice-returned"
          ],
          "values": {
            "memory": 1,
            "mercy": 2,
            "courage": 1
          }
        },
        {
          "id": "record",
          "label": "Record the refusal in the witness ledger",
          "consequence": "Mara writes exactly what he said. Whatever happens to his body, the town will not remember him only as its hunter.",
          "flags": [
            "daniel-refusal-recorded"
          ],
          "values": {
            "memory": 2,
            "mercy": 1,
            "courage": 0
          }
        },
        {
          "id": "stand",
          "label": "Stay in the doorway until he steadies",
          "consequence": "You resist the urge to run from his face. Silas keeps the light low, and Daniel’s breathing slowly separates from the bell.",
          "flags": [
            "daniel-accompanied"
          ],
          "values": {
            "memory": 0,
            "mercy": 2,
            "courage": 2
          }
        }
      ]
    },
    {
      "id": "castle-road",
      "chapter": 4,
      "title": "The Road That Returned the Footsteps",
      "art": "castle",
      "paragraphs": [
        "The path beyond the river climbs through a wood of bare fruit trees. Its stones seem ordinary until you notice each step sounding twice. The second footfall belongs to someone smaller than you. It pauses when you pause, but does not turn when you look back.",
        "Mara says the residents passed this way while the castle took their shadows. The road kept the weight of their walking. It is not a trap yet. It is a record waiting to become either a route home or another place people avoid.",
        "Above the gate, the Iron King’s crown turns slowly on a chain. The thirteenth lantern burns inside it with a color that makes nearby branches appear unfinished. Silas’s torch flame grows smaller, but it does not go out. On the gate, somebody has crossed out WE HAD NO CHOICE. From behind the gate comes the unmistakable sound of a resident trying not to cry.",
        "The road to the Mourning Crown carries parallel smears beside its wheel tracks. Someone tried to hold onto the stones while being taken uphill. At a bend, a broken fingernail catches Silas’s lantern. He folds it into a clean dressing instead of leaving it for the rain. The castle’s light makes the wet road look ceremonial. From here, ceremony is another word for a route that nobody stopped."
      ],
      "dialogue": [
        {
          "speaker": "mara",
          "text": "Whatever we choose inside, it must leave them a road out."
        }
      ],
      "choices": [
        {
          "id": "footsteps",
          "label": "Walk slowly enough for the lost footsteps",
          "consequence": "You give the smaller steps time to keep up. The road remembers movement toward safety instead of only movement toward the gate.",
          "flags": [
            "return-road"
          ],
          "values": {
            "memory": 1,
            "mercy": 2,
            "courage": 0
          }
        },
        {
          "id": "message",
          "label": "Add your name beside the crossed-out excuse",
          "consequence": "You make yourself a witness who cannot later claim ignorance. Mara writes hers beside yours, and Silas follows carefully.",
          "flags": [
            "witnesses-bound"
          ],
          "values": {
            "memory": 2,
            "mercy": 0,
            "courage": 1
          }
        },
        {
          "id": "gate",
          "label": "Knock before the crying falls silent",
          "consequence": "The sound crosses the courtyard like a challenge. You enter while the resident still knows there is someone outside listening.",
          "flags": [
            "castle-entered"
          ],
          "values": {
            "memory": 0,
            "mercy": 1,
            "courage": 2
          }
        }
      ]
    },
    {
      "id": "king-audience",
      "chapter": 5,
      "title": "The King Who Had Been Listening",
      "art": "castle",
      "paragraphs": [
        "The Iron King receives you beneath a ceiling painted with winter skies. His coat is ordinary, old-fashioned and carefully mended. The crown’s upper ring hangs above him on a chain; its lower band cuts into his forehead. Its lantern throws no shadow, leaving his chair like a gap in the room.",
        "He knows you came for the residents. He calls them guests, then corrects himself when Mara looks toward the barred gallery. He says they are being kept safe from a world that forgets its promises. Silas asks whether they chose to stay. The King begins answering another question.",
        "Outside the gallery, thirteen small lanterns breathe in uneven rhythms. Iona sits beside them, marking each breath on a paper roll. She has kept them alive by refusing to let their names become a single tidy number. The King has allowed her work because he cannot bear to watch a life go out.",
        "The crown’s lower band has grown into the Iron King’s forehead. Blood disappears beneath it when he bows. He has made visitors see sacrifice before authority. Mara looks instead at the keys in his hand. They open every ward manacle. The wound has never stopped him deciding who else must suffer."
      ],
      "dialogue": [
        {
          "speaker": "king",
          "text": "Tell me how to survive losing her again, and I will listen."
        }
      ],
      "choices": [
        {
          "id": "truth",
          "label": "Answer his question without promising a cure",
          "consequence": "You tell him grief can be survived with other people. He cannot believe it yet, but hears that you are not offering magic.",
          "flags": [
            "king-honesty"
          ],
          "values": {
            "memory": 2,
            "mercy": 2,
            "courage": 0
          }
        },
        {
          "id": "children",
          "label": "Demand the residents’ immediate release",
          "consequence": "You move the contract aside and name its living cost. Mara stands beside you, leaving the King nowhere to redirect the question.",
          "flags": [
            "release-demanded"
          ],
          "values": {
            "memory": 0,
            "mercy": 2,
            "courage": 2
          }
        },
        {
          "id": "terms",
          "label": "Ask what keeps the contract binding",
          "consequence": "He touches the crown’s chain rather than the paper. The agreement lives in repeated consent, not a signature that cannot be erased.",
          "flags": [
            "contract-examined"
          ],
          "values": {
            "memory": 2,
            "mercy": 0,
            "courage": 1
          }
        }
      ]
    },
    {
      "id": "sleepers-gallery",
      "chapter": 5,
      "title": "The Thirteen Separate Breaths",
      "art": "castle",
      "paragraphs": [
        "The gallery holds thirteen beds beneath thirteen windows. Each sleeper wears the costume in which they vanished. New cardboard lies beside velvet so old it has faded to brown. Some patients were taken this Halloween. Others have been absent longer than their families have been alive.",
        "The thirteenth lantern kept their bodies from aging while it spent their place in the town. Iona has brought their names back to the bedposts, but a name alone will not open a road home. Somebody must be willing to recognize the residents as people who belong to the future, not proof of an old crime.",
        "Mara repairs a loose strap on Kit’s discarded helmet. Silas speaks to each sleeper without making promises on their behalf. A resident in a knight’s costume wakes just enough to ask whether it is morning. You can hear the crown turning in the adjoining room. Every turn shortens the distance between a bed and its window.",
        "The thirteen beds hold adults with work-worn hands, grey hair, surgical scars and the particular exhaustion of bodies kept alive without being allowed to rest. One woman’s skin has adhered to a restraint pad. Mara wets the seam before lifting it. Rescue will take longer than cutting a cord. The patient watches her slow work and asks, in a voice unused for years, whether anyone knows she is here."
      ],
      "dialogue": [
        {
          "speaker": "iona",
          "text": "They need someone waiting for them. That is stronger than someone owning them."
        }
      ],
      "choices": [
        {
          "id": "future",
          "label": "Promise each resident a place in tomorrow",
          "consequence": "You speak about ordinary mornings without pretending the past can be repaired. Iona’s marks on the roll grow steadier.",
          "flags": [
            "future-promised"
          ],
          "values": {
            "memory": 1,
            "mercy": 2,
            "courage": 0
          }
        },
        {
          "id": "windows",
          "label": "Cover the false streets beyond the windows",
          "consequence": "Mara hands you curtains from the gallery cupboard. The sleepers stop turning toward the cold, inviting light beyond the glass.",
          "flags": [
            "windows-covered"
          ],
          "values": {
            "memory": 0,
            "mercy": 1,
            "courage": 2
          }
        },
        {
          "id": "names",
          "label": "Read the bedposts into Iona’s record",
          "consequence": "You keep the thirteen identities distinct. A number could be used in another bargain; these names will be harder to trade.",
          "flags": [
            "sleepers-recorded"
          ],
          "values": {
            "memory": 2,
            "mercy": 1,
            "courage": 0
          }
        }
      ]
    },
    {
      "id": "iona-clock",
      "chapter": 5,
      "title": "A Clock With No Spare Life",
      "art": "castle",
      "paragraphs": [
        "Iona’s machine sits on a convalescent ward table in the castle. Its brass hands move around a ring of thirteen marked positions. Each position names a resident. Nell’s stopped clock is wired separately beside the ring. When one hand approaches a faded letter, Iona touches a wire and keeps the name from disappearing.",
        "She has not slept. Her fingertips are raw, and her voice keeps slipping between anger and exhaustion. She found that the lantern counts what the town will accept as an absence. The machine interrupts its count, but cannot make the town stop accepting. Somebody outside must do that.",
        "Iona points toward the crown room. A person must choose what the lantern becomes when its old work ends. Destroying the mechanism carelessly could take the names it holds with it. Leaving it untouched will only make another clever person keep watch forever.",
        "Iona braces the wheel with a hand already missing two nails. When it slips, a spoke opens the dressing at her wrist. Silas catches the weight before it crushes her fingers. The clock does not respond to courage or a beautiful explanation. It responds to pressure. You have to find a practical way to hold it while deciding what its machinery may be allowed to take."
      ],
      "dialogue": [
        {
          "speaker": "iona",
          "text": "I can hold them for a little longer. I cannot make this little longer into a life."
        }
      ],
      "choices": [
        {
          "id": "watch",
          "label": "Take a turn keeping the names steady",
          "consequence": "Iona closes her eyes for one precious minute. You feel how exhausting resistance becomes when everyone else calls it somebody’s private problem.",
          "flags": [
            "watch-shared"
          ],
          "values": {
            "memory": 1,
            "mercy": 2,
            "courage": 0
          }
        },
        {
          "id": "clock",
          "label": "Separate Nell’s stopped clock from the living names",
          "consequence": "You loosen the old grief from the residents’ futures. The machine trembles, but its moving hands keep their distinct circles.",
          "flags": [
            "grief-separated"
          ],
          "values": {
            "memory": 2,
            "mercy": 0,
            "courage": 1
          }
        },
        {
          "id": "plan",
          "label": "Ask Iona for a way that ends her watch",
          "consequence": "Together you mark what must be protected before the crown can change. You refuse to solve the town’s harm with another endless keeper.",
          "flags": [
            "watch-ending-plan"
          ],
          "values": {
            "memory": 1,
            "mercy": 1,
            "courage": 2
          }
        }
      ]
    },
    {
      "id": "widow-doors",
      "chapter": 5,
      "title": "The Doors the Widow Held Open",
      "art": "widow",
      "paragraphs": [
        "The castle’s long corridor contains doors to bedrooms across October. You recognize the angled window of Kit’s home and the stove in Agnes’s infirmary. Other rooms belong to households that no longer exist. The Tallow Widow stands among the thresholds, holding their openings with fingers full of little flames.",
        "She has been promised that one door will lead to her husband. The promise changes each year, and she keeps making room for it. Tonight the lantern wants her to hold the residents’ false streets open while their real homes disappear.",
        "The castle notices. Wax begins falling from the ceiling, hot enough to smoke where it touches the floor. The Widow’s veiled head turns toward the crown room. She can choose to release the doors, but she is terrified that choosing will prove how long she has been wrong.",
        "At each false door, the Widow leaves a patch of wax on the handle. Within it, a fingerprint slowly appears. It belongs to the person who trusted that door last. Mara marks the handles with chalk and chooses a route using hinges, drafts and the sound of living voices. The creature offers reassurance from every room you reject. Its kindness becomes louder as its guidance becomes less useful."
      ],
      "dialogue": [
        {
          "speaker": "widow",
          "text": "If I let go, who will remember that I waited because I loved him?"
        }
      ],
      "choices": [
        {
          "id": "witness",
          "label": "Promise to remember both her love and her harm",
          "consequence": "You offer an honest witness instead of forgiveness she has not earned. One more burning finger loosens from its threshold.",
          "flags": [
            "widow-witnessed"
          ],
          "values": {
            "memory": 2,
            "mercy": 2,
            "courage": 0
          }
        },
        {
          "id": "release",
          "label": "Help her close the residents’ false doors",
          "consequence": "You work beside her without asking her to look away. The corridor shortens as its impossible bedrooms return to ordinary walls.",
          "flags": [
            "false-doors-closed"
          ],
          "values": {
            "memory": 0,
            "mercy": 2,
            "courage": 1
          }
        },
        {
          "id": "crown",
          "label": "Defy the lantern’s punishment",
          "consequence": "You carry your light beneath the falling wax. The Widow sees someone endure the castle’s anger without becoming its servant.",
          "flags": [
            "widow-fear-challenged"
          ],
          "values": {
            "memory": 0,
            "mercy": 1,
            "courage": 2
          }
        }
      ]
    },
    {
      "id": "cantor-court",
      "chapter": 5,
      "title": "The Court of Perfect Excuses",
      "art": "cantor",
      "paragraphs": [
        "In the castle’s music room, the Hollow Cantor sings the statements the council used to justify each Halloween. The words are written around the ceiling in gilt letters. Every excuse is brief enough to sound reasonable if you do not ask what came before it.",
        "WE HAD NO CHOICE. IT WAS ONLY ONE. THE TOWN MUST GO ON. The same chords accompany them all. Below the ceiling, thirteen music stands hold the residents’ unanswered letters. Their uneven sentences will not fit the Cantor’s beautiful measures.",
        "Silas turns a stand so that the first letter faces the singer. Mara opens the next. The Cantor’s hollow ribs catch a little of each ordinary voice. His music loses its polish and gains something like breath.",
        "A note reaches the court from the ward and leaves everyone briefly unable to move. You can still feel your heart accelerating. The Cantor has learned to silence resistance without silencing fear. Silas drops his lantern against the stone, producing an ugly crash outside the song’s rhythm. Mara moves first. The sound did not comfort her. It gave her body something real to answer."
      ],
      "dialogue": [
        {
          "speaker": "cantor",
          "text": "I learned to make their words beautiful. I never learned to make them true."
        }
      ],
      "choices": [
        {
          "id": "letters",
          "label": "Give the residents’ sentences their own rhythm",
          "consequence": "You let the awkward lines remain awkward. The Cantor begins following their meaning rather than pressing them into the council’s tune.",
          "flags": [
            "children-song"
          ],
          "values": {
            "memory": 2,
            "mercy": 2,
            "courage": 0
          }
        },
        {
          "id": "window",
          "label": "Send the truthful song down to the festival",
          "consequence": "Silas opens the high window. Below, several dancers stop at different moments, each hearing a familiar voice inside the music.",
          "flags": [
            "truth-broadcast"
          ],
          "values": {
            "memory": 1,
            "mercy": 1,
            "courage": 2
          }
        },
        {
          "id": "silence",
          "label": "Ask the Cantor to choose an honest silence",
          "consequence": "He lowers his hands. Without the practiced excuses, the castle has to listen to the residents’ breathing in the next room.",
          "flags": [
            "cantor-silenced"
          ],
          "values": {
            "memory": 2,
            "mercy": 0,
            "courage": 1
          }
        }
      ]
    },
    {
      "id": "sexton-ledger",
      "chapter": 5,
      "title": "The Ledger of Those Who Could Not Sign",
      "art": "sexton",
      "paragraphs": [
        "The castle archive contains a duplicate of the Drowned Sexton’s book. Its stones have been copied onto paper, but every copied name has a space beside it for consent. Most spaces are blank. The later clerks filled the blanks with stamps that say ASSUMED.",
        "You find the winter families, the vanished patients and Daniel Rook. Beside Nell’s name, the Iron King himself has written that she would have understood. His handwriting breaks at the end of the sentence. It is still there, doing work no dead resident can correct.",
        "On the archive wall, a photograph shows the Sexton before the river took him. He stands beside a low bridge with residents sitting safely on both shoulders. The library catalog calls the photograph decorative. Silas turns its label face down. Outside the door, the King’s steps approach and stop. He is listening to the pages turn.",
        "The sexton takes the river debt out of his ledger and sets it on the floor. It looks like a strip of wet fabric until you see the pores. Names have been written on the skin in several hands. Some belong to dead officials. Others belong to people still serving festival drinks in town. The obligation has survived because its owners were permitted to change their signatures while its victims could not leave."
      ],
      "dialogue": [
        {
          "speaker": "mara",
          "text": "Nobody can inherit the right to agree for someone else."
        }
      ],
      "choices": [
        {
          "id": "consent",
          "label": "Strike out every assumed consent",
          "consequence": "You leave the empty spaces empty. The archive can no longer make silence look like a willing signature.",
          "flags": [
            "false-consent-erased"
          ],
          "values": {
            "memory": 2,
            "mercy": 1,
            "courage": 1
          }
        },
        {
          "id": "nell",
          "label": "Ask the King to read Nell’s entry himself",
          "consequence": "You do not read around his hand. He faces the sentence he wrote for his daughter and hears its missing answer.",
          "flags": [
            "king-consent-faced"
          ],
          "values": {
            "memory": 2,
            "mercy": 2,
            "courage": 0
          }
        },
        {
          "id": "stamp",
          "label": "Destroy the clerk’s convenient stamp",
          "consequence": "The wooden handle cracks beneath your heel. Mara keeps one half as evidence of the ordinary tool that made extraordinary harm easier.",
          "flags": [
            "assumption-stamp-broken"
          ],
          "values": {
            "memory": 0,
            "mercy": 0,
            "courage": 2
          }
        }
      ]
    },
    {
      "id": "wolf-stair",
      "chapter": 5,
      "title": "The Creature on the Ward Stair",
      "art": "wolf",
      "paragraphs": [
        "Daniel waits on the stair between the sleeping residents and the crown room. The Bellwrought’s stretched body is folded into the narrow passage. Nails curl against the banister. His protruding face lifts whenever a sleeper moves, and his eyes strain toward sounds he cannot bear to follow.",
        "The bell beneath his throat is ringing without moving. The crown is calling its hunter back to work. Daniel grips the rail so hard the wood separates into wet fibers. He remembers refusing once, but a remembered refusal does not make his altered body easy to govern.",
        "Silas keeps the lantern below his eyes. Mara talks about the infirmary, describing little repairs Daniel used to make without asking who would thank him. The creature’s breath slows, then catches as the crown turns again.",
        "The Bellwrought rises on his hind legs at the ward stair, his long forearms hanging below his knees. Each movement pulls a different patch of human skin taut. He can climb faster than a person can retreat, but Agnes calls his name from below and makes him hesitate. She has come from the infirmary after hearing the distant bell. Behind him, an attendant tries a key in a patient’s door. Daniel turns toward the small metallic sound. His remaining human loyalties do not make his violence safe."
      ],
      "dialogue": [
        {
          "speaker": "daniel",
          "text": "Make it stop calling me good when it wants me to hurt them."
        }
      ],
      "choices": [
        {
          "id": "name",
          "label": "Give Daniel an instruction in his own name",
          "consequence": "You ask him to guard the residents because he chooses to. His long hands loosen their grip without releasing the stair.",
          "flags": [
            "daniel-guarding"
          ],
          "values": {
            "memory": 1,
            "mercy": 2,
            "courage": 1
          }
        },
        {
          "id": "bell",
          "label": "Help Mara quiet the throat-bell",
          "consequence": "You hold the cloth steady against his trembling neck. The crown’s command becomes a distant vibration he can answer more slowly.",
          "flags": [
            "throat-bell-held"
          ],
          "values": {
            "memory": 0,
            "mercy": 2,
            "courage": 2
          }
        },
        {
          "id": "crown",
          "label": "Go above him to confront the caller",
          "consequence": "You trust him with the passage while facing the source of his torment. Silas remains where Daniel can still see a gentle light.",
          "flags": [
            "caller-confronted"
          ],
          "values": {
            "memory": 1,
            "mercy": 0,
            "courage": 2
          }
        }
      ]
    },
    {
      "id": "winter-window",
      "chapter": 5,
      "title": "The Window Where Winter Waited",
      "art": "castle",
      "paragraphs": [
        "One window in the crown room looks onto the winter the town tried to remove. Snow presses against its glass, though the real garden below is full of autumn leaves. The Iron King has been standing before this view for so long that his footprints have worn through the stone.",
        "In the window, Nell approaches the broken river bridge. She turns back toward the house and raises a hand. The scene stops before the flood reaches her, then begins again. The lantern has given her father the last moment before loss, repeated until he mistook postponement for protection.",
        "Iona stands at the doorway with Nell’s stopped clock. The past cannot change, she says. It can stop borrowing living futures. The King’s hand rises toward the glass again.",
        "Outside the winter window, Nell’s adult body stands in river water that cannot reach the sill. Her face changes when her father addresses her, assembling whichever expression would make him stop grieving. Mara asks what Nell herself intended to do the following morning. The figure cannot answer. The failure is not evidence that her life was worthless. It is evidence that the window has never contained her."
      ],
      "dialogue": [
        {
          "speaker": "king",
          "text": "If I let the scene end, what will be left of me?"
        }
      ],
      "choices": [
        {
          "id": "remain",
          "label": "Tell him who can remain beside him",
          "consequence": "You name living people without making them responsible for curing him. The King looks away from the glass long enough to see Iona.",
          "flags": [
            "king-not-alone"
          ],
          "values": {
            "memory": 0,
            "mercy": 2,
            "courage": 0
          }
        },
        {
          "id": "ending",
          "label": "Let the window’s unfinished moment proceed",
          "consequence": "You uncover the stopped clock. The winter does not change, but the room begins experiencing time instead of borrowing it.",
          "flags": [
            "winter-accepted"
          ],
          "values": {
            "memory": 2,
            "mercy": 1,
            "courage": 2
          }
        },
        {
          "id": "account",
          "label": "Ask him to face the futures he spent",
          "consequence": "You turn him toward the gallery’s thirteen breaths. His grief remains real while the residents’ claim on tomorrow becomes impossible to ignore.",
          "flags": [
            "futures-accounted"
          ],
          "values": {
            "memory": 2,
            "mercy": 1,
            "courage": 1
          }
        }
      ]
    },
    {
      "id": "crown-chain",
      "chapter": 6,
      "title": "The Chain Above the Empty Chair",
      "art": "castle",
      "paragraphs": [
        "The crown’s chain runs through the castle ceiling and down into the stone foundations. There is no lock to pick. Every link bears a household’s mark, pressed into the iron when someone asked the King for another year of relief. The chain has grown because the requests continued.",
        "Iona brings the residents’ names into the crown room. Mara holds the door. Silas places his lantern on the floor so its light belongs to everyone, not only the person standing nearest it. The King rises from his worn chair, and for a moment looks like the watchmaker’s frightened old neighbor rather than a sovereign.",
        "The crown turns once more. The household marks begin sliding along their links. You hear the town asking, in many ordinary voices, why this is happening on a night that was supposed to be happy. None asks yet what they agreed to make happiness possible.",
        "The chain passes beneath the crown and through the King’s shoulders. Pulling it would injure him. Leaving it intact keeps thirteen adults under restraint. Iona places a folded dressing beside the mechanism and asks Mara to be ready. They refuse to mistake a necessary injury for an innocent act, even when the person who will receive it has arranged far worse for others."
      ],
      "dialogue": [
        {
          "speaker": "iona",
          "text": "Make a promise people can keep in daylight. We have had enough midnight exceptions."
        }
      ],
      "choices": [
        {
          "id": "account",
          "label": "Make every household face its own marked link",
          "consequence": "You call for an honest account, beginning with those who profited most. The chain loses the certainty that silence is consent.",
          "flags": [
            "chain-witness"
          ],
          "values": {
            "memory": 2,
            "mercy": 1,
            "courage": 1
          },
          "resolutionTag": "witness"
        },
        {
          "id": "share",
          "label": "Give the lantern to the whole town’s care",
          "consequence": "You ask for many willing hands and no captive keeper. Mara opens the gallery door as the crown lowers toward ordinary height.",
          "flags": [
            "chain-release"
          ],
          "values": {
            "memory": 1,
            "mercy": 2,
            "courage": 0
          },
          "resolutionTag": "release"
        },
        {
          "id": "break",
          "label": "Break the crown’s authority over the links",
          "consequence": "You strike the first mark without striking its owner. The room shakes as the town’s repeated excuses lose their iron shape.",
          "flags": [
            "chain-defied"
          ],
          "values": {
            "memory": 1,
            "mercy": 0,
            "courage": 2
          },
          "resolutionTag": "defy"
        }
      ]
    },
    {
      "id": "names-flame",
      "chapter": 6,
      "title": "What the Flame Is Allowed to Keep",
      "art": "castle",
      "paragraphs": [
        "The thirteenth flame leans out of its glass chimney. Inside its pale center, you see faces without their names, names without their owners and a winter held one moment short of truth. It has never needed to be cruel in its own language. It calls everything it takes preservation.",
        "Iona sets her paper roll beneath the light. Each resident’s breathing gives a separate line. Silas traces them with one finger, taking care not to join two together. Mara reminds you that returning a name must also return the right to say no to the person who offers it.",
        "The King watches the faces move inside the flame. Some were lost to the river. Others are sleeping in the next room. He cannot keep treating them as the same kind of absence. Nell’s death cannot be undone. The residents’ living futures can still be returned.",
        "The flame gives each name a different color. Some names arrive with a scream, others with the almost inaudible sound of someone answering roll call. A patient at the far end of the gallery sits up and begins bleeding from both nostrils. Mara goes to her before the ritual ends. Whatever the lantern promises, a living person must survive long enough to receive it."
      ],
      "dialogue": [
        {
          "speaker": "mara",
          "text": "Let a lantern show where somebody is. Do not let it decide whether they belong."
        }
      ],
      "choices": [
        {
          "id": "distinguish",
          "label": "Separate the dead names from the living futures",
          "consequence": "You give each loss its true place. The lantern cannot call the sleeping residents replacements for someone the river took.",
          "flags": [
            "flame-witness"
          ],
          "values": {
            "memory": 2,
            "mercy": 1,
            "courage": 0
          },
          "resolutionTag": "witness"
        },
        {
          "id": "return",
          "label": "Return every living name to its owner",
          "consequence": "You open the roll and let the residents’ rhythms remain distinct. Mara goes to meet whoever wakes first.",
          "flags": [
            "flame-release"
          ],
          "values": {
            "memory": 1,
            "mercy": 2,
            "courage": 0
          },
          "resolutionTag": "release"
        },
        {
          "id": "end",
          "label": "End the flame’s right to keep anyone",
          "consequence": "You turn the cracked chimney outward. Its stolen faces scatter toward their own histories rather than another keeper’s hand.",
          "flags": [
            "flame-defied"
          ],
          "values": {
            "memory": 1,
            "mercy": 0,
            "courage": 2
          },
          "resolutionTag": "defy"
        }
      ]
    },
    {
      "id": "home-handles",
      "chapter": 6,
      "title": "A Handle on the Inside",
      "art": "castle",
      "paragraphs": [
        "The castle’s doors open again onto houses across October. This time you can see what was concealed before: every false bedroom has a handle only on the outside. The person promising safety was always the person permitted to end it.",
        "Mara brings a tray of ordinary brass handles from the workshop. Iona says the metal does not carry a spell. It carries a practical objection. Anyone put into a room must be able to leave it. Silas balances the tray beneath the lantern, and the doorways begin trembling around this unfamiliar rule.",
        "In one room, a resident sits beside an unlit birthday cake. In another, an old man waits for a visitor whose face he has forgotten. Not every captive belongs to this Halloween. The lantern has taken years of unfinished human life and arranged them into comfortable-looking prisons.",
        "A door handle opens the skin across Silas’s palm when he turns it. The house behind it is full of voices telling him that pain means he has chosen wrongly. He wraps the wound, checks the hinge, and turns again. The first returning resident cannot walk without assistance. Their homecoming will need food, beds and witnesses. Dawn alone will not know how to give them those things."
      ],
      "dialogue": [
        {
          "speaker": "mara",
          "text": "If safety depends on somebody never being allowed to leave, it is somebody else’s safety."
        }
      ],
      "choices": [
        {
          "id": "show",
          "label": "Show the town what the locked rooms held",
          "consequence": "You leave the first door open as testimony. Visitors will see a person inside before hearing the keeper’s explanation.",
          "flags": [
            "rooms-witness"
          ],
          "values": {
            "memory": 2,
            "mercy": 1,
            "courage": 1
          },
          "resolutionTag": "witness"
        },
        {
          "id": "handles",
          "label": "Fit handles every captive can reach",
          "consequence": "You lower each handle to its owner’s height. The castle’s grand frames stop mattering beside the small movement of a freed hand.",
          "flags": [
            "rooms-release"
          ],
          "values": {
            "memory": 0,
            "mercy": 2,
            "courage": 1
          },
          "resolutionTag": "release"
        },
        {
          "id": "frames",
          "label": "Pull down the frames that resist release",
          "consequence": "Silas guards the occupants while you break the false thresholds. No invitation will ever make these particular prisons welcoming again.",
          "flags": [
            "rooms-defied"
          ],
          "values": {
            "memory": 0,
            "mercy": 1,
            "courage": 2
          },
          "resolutionTag": "defy"
        }
      ]
    },
    {
      "id": "school-bell",
      "chapter": 6,
      "title": "The Bell That Must Learn a Different Call",
      "art": "cantor",
      "paragraphs": [
        "The infirmary bell has followed the old tunnels into the castle. Whether carried by a person or drawn by the light, it now hangs beside the crown. Its iron has been polished by generations of mornings when residents believed a call meant someone was expecting them safely.",
        "The lantern taught that bell a different duty. It rang over the festival until a question could not be heard. It called Daniel good when it needed a hunter, called the Cantor comforting when it needed silence, called the Widow devoted when it needed open doors.",
        "Iona lays a finger against its rim and the ringing stops. Through the pause you hear the town beyond the river, uncertain and full of ordinary noise. A dog barks. Someone drops a tray. A resident asks where the other residents have gone.",
        "Agnes hangs the infirmary bell where staff once kept the discharge register. Its clapper is still stained. She insists that the stain remain visible until every patient has a documented account of leaving. A bell can summon help or cover a locked door. The people holding the rope must be answerable for which purpose it serves."
      ],
      "dialogue": [
        {
          "speaker": "silas",
          "text": "A call is only kind if someone gets to answer it."
        }
      ],
      "choices": [
        {
          "id": "record",
          "label": "Keep the bell and name every false summons",
          "consequence": "You make its history part of the town’s public account. The iron is no longer allowed to ring above unanswered testimony.",
          "flags": [
            "bell-witness"
          ],
          "values": {
            "memory": 2,
            "mercy": 1,
            "courage": 0
          },
          "resolutionTag": "witness"
        },
        {
          "id": "welcome",
          "label": "Let the bell call people home together",
          "consequence": "You ring once, then wait for actual answers. The sound invites neighbors instead of ordering the frightened to become quiet.",
          "flags": [
            "bell-release"
          ],
          "values": {
            "memory": 0,
            "mercy": 2,
            "courage": 1
          },
          "resolutionTag": "release"
        },
        {
          "id": "shatter",
          "label": "Silence the old summons permanently",
          "consequence": "You break the rim while the gallery doors stand open. Daniel’s shoulders settle as the command in his throat finally falters.",
          "flags": [
            "bell-defied"
          ],
          "values": {
            "memory": 1,
            "mercy": 0,
            "courage": 2
          },
          "resolutionTag": "defy"
        }
      ]
    },
    {
      "id": "town-answer",
      "chapter": 6,
      "title": "The Town on the Other Side of the Window",
      "art": "widow",
      "paragraphs": [
        "The crown room’s high window opens onto Lantern Crescent. Its empty hook now holds a dark shape like a person made of folded paper. The townspeople have gathered beneath it, waiting for the mayor to tell them whether the festival will continue.",
        "Agnes stands near the fountain with her staff photographs. Kit holds the repaired mine-rescuer helmet. Merrin has brought the costumes she kept behind her counter. The crowd makes room for these familiar people, then falls silent when it sees whom their belongings describe.",
        "The King says the town will turn on whoever makes it suffer the old grief again. He may be right about some of them. You can hear anger already, mingled with recognition. People are asking why they were not told, while others are remembering how often they preferred an easier answer.",
        "A festival official asks Mara to close the dressing around Beatrice’s wrist before the press photographs it. He says it will spare the public distress. Beatrice tells him to look at the injury. The crowd shifts, and you see how easily a town can become a second restraint. Nobody has to grow claws to prevent a wounded woman from speaking."
      ],
      "dialogue": [
        {
          "speaker": "agnes",
          "text": "Let them be angry. Then ask them what they will do with the truth."
        }
      ],
      "choices": [
        {
          "id": "public",
          "label": "Tell the crowd the whole account",
          "consequence": "You make room for grief, responsibility and the residents’ own words. The mayor cannot finish the story on anybody else’s behalf.",
          "flags": [
            "town-witness"
          ],
          "values": {
            "memory": 2,
            "mercy": 1,
            "courage": 1
          },
          "resolutionTag": "witness"
        },
        {
          "id": "welcome",
          "label": "Ask the crowd to welcome every returning resident",
          "consequence": "You turn the question toward practical care. Several people leave the platform to open kitchens, spare rooms and infirmary doors.",
          "flags": [
            "town-release"
          ],
          "values": {
            "memory": 0,
            "mercy": 2,
            "courage": 1
          },
          "resolutionTag": "release"
        },
        {
          "id": "order",
          "label": "End the mayor’s authority to choose a sacrifice",
          "consequence": "You refuse the next gracious explanation. The crowd sees that a peaceful-looking festival is no excuse for another empty bed.",
          "flags": [
            "town-defied"
          ],
          "values": {
            "memory": 1,
            "mercy": 0,
            "courage": 2
          },
          "resolutionTag": "defy"
        }
      ]
    },
    {
      "id": "king-debt",
      "chapter": 6,
      "title": "The Place Offered Beside the King",
      "art": "castle",
      "paragraphs": [
        "The King offers you a place beside his chair. He says one willing person could keep the lantern from taking anyone else. The offer sounds kinder than the old bargain because it is addressed to someone who can understand its terms. Iona asks him to describe those terms without poetry.",
        "He admits the keeper must remain where the light can find them. They cannot simply go home when the work becomes unbearable. Their memories will be spent first, beginning with the ones that make leaving most painful. The residents would wake, but the town would still possess a comfortable answer to somebody else’s captivity.",
        "The King lowers his eyes. Nobody has made him explain the keeper’s loneliness aloud before. The chair beside him contains a patch of cloth worn smooth by an earlier visitor. This is not the first time a courageous stranger has been told that taking a place is the quickest way to save a town.",
        "The King offers his own veins to the clock with a theatrical sweep of the arm. Iona stops him and asks for the ledger, the keys and the names of every person who renewed the covenant. He becomes less willing. A wound can heal. An account that other people are allowed to examine may end his authority. You have finally reached the price he fears."
      ],
      "dialogue": [
        {
          "speaker": "iona",
          "text": "Do not mistake a smaller prison for the end of imprisonment."
        }
      ],
      "choices": [
        {
          "id": "explain",
          "label": "Make the town witness the full proposed debt",
          "consequence": "You repeat the offer where no pleasant wording can conceal its cost. The empty chair becomes evidence rather than an invitation.",
          "flags": [
            "debt-witness"
          ],
          "values": {
            "memory": 2,
            "mercy": 1,
            "courage": 0
          },
          "resolutionTag": "witness"
        },
        {
          "id": "refuse",
          "label": "Refuse a captive keeper and seek shared release",
          "consequence": "You ask the King to stop offering strangers a duty he cannot bear alone. Mara opens a place beside the residents instead.",
          "flags": [
            "debt-refused"
          ],
          "values": {
            "memory": 0,
            "mercy": 2,
            "courage": 1
          },
          "resolutionTag": "release"
        },
        {
          "id": "accept",
          "label": "Accept the keeper’s debt to free the residents",
          "consequence": "You choose the chair knowing its cost. Iona records the terms, refusing to let the town remember your consent as effortless generosity.",
          "flags": [
            "chosen-debt"
          ],
          "values": {
            "memory": 1,
            "mercy": 1,
            "courage": 2
          },
          "resolutionTag": "bargain"
        }
      ]
    },
    {
      "id": "memory-price",
      "chapter": 6,
      "title": "The Memory Nobody Else Can Offer",
      "art": "chainbearer",
      "paragraphs": [
        "The flame reaches toward the memory you brought into October: the face of someone whose absence still makes a room feel incorrectly arranged. It offers to remove the pain. For a moment, you can imagine waking without the old catch in your breath.",
        "That was the first bargain. Before contracts and costumes, someone was told they could stop hurting if they let a little of the past go dark. You feel how reasonable the offer can sound when grief has made ordinary mornings difficult.",
        "The lantern proposes that your willing memory could pay for the residents’ release. Iona says it would buy time, not transform the arrangement. The town would owe another payment when that time ended. Mara does not dismiss your pain. She says choosing to remember cannot mean being left alone with it.",
        "The first memory begins to leave Silas through the burn along his jaw. His expression slackens as the mechanism removes a sound he has been trying to recall for years. Mara catches his hand and asks him to say what he wants, before the payment changes him enough to make wanting difficult. Consent must be heard while he still has the personhood required to give it."
      ],
      "dialogue": [
        {
          "speaker": "mara",
          "text": "We can carry a part with you. We cannot decide that you should have nothing left."
        }
      ],
      "choices": [
        {
          "id": "keep",
          "label": "Keep the memory and tell its honest story",
          "consequence": "You give the absent person words the lantern cannot turn into fuel. Silas stays close through the parts that hurt to say.",
          "flags": [
            "memory-witness"
          ],
          "values": {
            "memory": 2,
            "mercy": 1,
            "courage": 0
          },
          "resolutionTag": "witness"
        },
        {
          "id": "share",
          "label": "Let others help carry the grief without erasing it",
          "consequence": "You accept company instead of relief purchased from another future. Mara leaves space for silence as well as the story.",
          "flags": [
            "memory-shared"
          ],
          "values": {
            "memory": 1,
            "mercy": 2,
            "courage": 0
          },
          "resolutionTag": "release"
        },
        {
          "id": "offer",
          "label": "Offer the memory, knowing the debt will remain",
          "consequence": "You consent to the loss for the residents’ sake. Iona names the unpaid future aloud before the flame can call the bargain complete.",
          "flags": [
            "chosen-debt"
          ],
          "values": {
            "memory": 1,
            "mercy": 1,
            "courage": 2
          },
          "resolutionTag": "bargain"
        }
      ]
    },
    {
      "id": "last-breath",
      "chapter": 6,
      "title": "The Last Breath Before Morning",
      "art": "castle",
      "paragraphs": [
        "A pale line appears behind the town’s roofs. Morning is approaching, and the thirteenth lantern begins contracting around its remaining names. The King says daylight will preserve whatever arrangement survives the next few minutes. A promise made now will become the story people repeat tomorrow.",
        "Mara goes to the gallery. Silas keeps your light facing outward. Iona opens the final shutter on her machine, giving each resident’s breath a path toward the room beyond. You can hear them waking one at a time, frightened by a night that has lasted longer than their last clear memory.",
        "The crown gives a final turn. Its shadow crosses your hands, then the floor, then the open gallery door. This is the moment to decide what the night will leave behind: an account people cannot politely ignore, a common duty to care for the returned, or the broken authority of the thing that kept them.",
        "Glass falls across the gallery as the last bell strikes. A returning patient steps on a shard and leaves blood on the white floor. The mechanism has stopped, but the building remains dangerous. Silas carries the injured woman through the broken doorway while Mara counts the others aloud. The choice you made becomes a set of practical duties before it becomes an ending anyone can tell."
      ],
      "dialogue": [
        {
          "speaker": "silas",
          "text": "We do not need a perfect morning. We need one they are allowed to enter."
        }
      ],
      "choices": [
        {
          "id": "witness",
          "label": "Carry the true account into the morning",
          "consequence": "You leave the crown unable to close over an unnamed absence. The residents step toward a dawn that will have to acknowledge them.",
          "flags": [
            "dawn-witness"
          ],
          "values": {
            "memory": 2,
            "mercy": 1,
            "courage": 1
          },
          "resolutionTag": "witness"
        },
        {
          "id": "release",
          "label": "Open the road home for everyone who wakes",
          "consequence": "Mara leads the first resident through. You hold the door until no breath remains hidden on Iona’s patient paper roll.",
          "flags": [
            "dawn-release"
          ],
          "values": {
            "memory": 0,
            "mercy": 2,
            "courage": 1
          },
          "resolutionTag": "release"
        },
        {
          "id": "defy",
          "label": "Break the crown before it can choose another keeper",
          "consequence": "You face its last violent turn while Silas shields the waking residents. The old authority reaches daylight in pieces.",
          "flags": [
            "dawn-defied"
          ],
          "values": {
            "memory": 1,
            "mercy": 0,
            "courage": 2
          },
          "resolutionTag": "defy"
        }
      ]
    }
  ],
  "endings": [
    {
      "id": "names-at-dawn",
      "title": "The Names at Dawn",
      "art": "castle",
      "disposition": "memory",
      "resolutionTag": "witness",
      "conditionsHint": "A memory-led journey concluded with public testimony.",
      "paragraphs": [
        "Iona opens the gallery after your account breaks the covenant’s assumed consent. At sunrise, the residents walk into Maple Lane beneath their own names. Some families recognize them immediately. Others have to listen before recognition arrives. Agnes reads the infirmary register at the fountain, pausing whenever a returning patient wants to correct something about the record.",
        "The town cannot make a single comforting story out of the night. Iona’s testimony remains beside the council’s signatures. Daniel’s refusal is written alongside the damage he did. The dead are remembered as dead, and the living are permitted to become people beyond what happened to them.",
        "At dawn, Beatrice’s wrist has swollen inside its dressing. Mara sits beside her and checks that the fingers still move. The casualty register lies open on the same table. Correct names will not close the wounds by themselves, but those names now belong to people who may demand care, compensation and an account of what was done. October cannot call them voluntary departures again."
      ],
      "dialogue": []
    },
    {
      "id": "winter-finished",
      "title": "The Winter Allowed to End",
      "art": "castle",
      "disposition": "memory",
      "resolutionTag": "release",
      "conditionsHint": "A memory-led journey concluded by releasing grief and living futures.",
      "paragraphs": [
        "Iona lets the winter clock proceed and disconnects the living names. The winter window finally shows the river completing its terrible movement. The King sees Nell die without another resident’s future standing between him and the truth. He does not become wise at once. He falls to his knees, and Iona stays nearby without calling his grief a pardon.",
        "The sleepers wake. Their costumes look strange in the ordinary morning light, but their voices belong to themselves. Mara arranges blankets and asks who wants company. Silas opens a window onto the actual garden, where no false street is waiting beyond the glass.",
        "The river gives up a piece of Nell’s coat when the window closes. Her father kneels beside it. He has not recovered his daughter, and nobody pretends he has. Mara carries the cloth to the registrar as part of an adult woman’s death record. Grief is allowed to remain in the room. Its permission to imprison other lives has ended."
      ],
      "dialogue": []
    },
    {
      "id": "archive-open",
      "title": "The Archive With No Locked Shelf",
      "art": "chainbearer",
      "disposition": "memory",
      "resolutionTag": "defy",
      "conditionsHint": "A memory-led journey concluded by ending the lantern’s authority.",
      "paragraphs": [
        "With the sleepers protected, you and Iona break the crown’s remaining grip. The broken crown is displayed in the infirmary beside the register. Nobody polishes it. Iona insists that it keep the marks of its breaking, so the town cannot turn it into a romantic ornament from an unfortunate past.",
        "Every amended covenant, every unposted letter and every assumed consent becomes available to read. The names do not make agreement easy. People argue over responsibility, over shame, over whether residents should hear what adults did. Agnes answers that the residents already lived through what adults preferred not to explain.",
        "Agnes puts the restraint buckle beside the first open ledger. Some residents turn away from the photograph beneath it. Others ask to read the handwriting. The exhibition has no triumphant banner. It has a chair for anyone who needs to sit while understanding the evidence, and a list of patients whose whereabouts are still unknown. An honest archive leaves room for the work it has not completed."
      ],
      "dialogue": []
    },
    {
      "id": "borrowed-witness",
      "title": "The Witness Who Paid",
      "art": "chainbearer",
      "disposition": "memory",
      "resolutionTag": "bargain",
      "conditionsHint": "A memory-led journey accepted an explicitly costly keeper or memory bargain.",
      "paragraphs": [
        "The residents return at dawn, carrying their names into streets that had nearly forgotten them. Your bargain is recorded beside the old covenant, with no flattering words about a painless gift. Iona makes the town read its cost aloud.",
        "You remain bound to what you offered. The lantern is quieter, but it is not harmless. Some mornings you search for a memory that used to arrive without effort. On others, the keeper’s work makes the road home seem farther than it should.",
        "You wake with a gap in your own history. You remember the ward clearly and the home you left imperfectly. Silas refuses to call that exchange a cure. He writes down what you say before anyone offers a simpler account. Your testimony matters, and the cost of retaining it matters too. The town must learn to hold both facts without bargaining one away."
      ],
      "dialogue": []
    },
    {
      "id": "children-home",
      "title": "The Doors That Opened Inward",
      "art": "widow",
      "disposition": "mercy",
      "resolutionTag": "release",
      "conditionsHint": "A mercy-led journey concluded with shared care and release.",
      "paragraphs": [
        "The first returning resident asks for breakfast. That simple request changes the morning. Neighbors who were waiting for a grand explanation begin opening kitchens instead. Some know the residents. Some do not. Mara insists that recognition must not be the price of being fed.",
        "Agnes makes a new register with room for the patients’ own handwriting. Iona repairs clocks without pretending lost years can be restored. Silas learns which door each resident wants to approach, and walks beside the ones whose old homes are no longer there.",
        "The released adults return through streets dressed for a celebration they never consented to join. Some houses are gone. Some spouses have remarried. Agnes gives every person a clean bed without requiring gratitude. The lantern cannot restore the years. Its flame now reveals who needs help finding a place in the years that remain."
      ],
      "dialogue": []
    },
    {
      "id": "lantern-common",
      "title": "A Light Nobody Owned",
      "art": "castle",
      "disposition": "mercy",
      "resolutionTag": "witness",
      "conditionsHint": "A mercy-led journey concluded by witnessing and sharing responsibility.",
      "paragraphs": [
        "The town keeps one lantern in the square. Its fuel is ordinary oil, and its care is shared. Iona removes the old mechanism before somebody can call it useful in an emergency. The empty space inside the chimney is allowed to remain empty.",
        "Beside the light are the names of the residents and the people who died in the winter. There is also a plain account of who signed the covenant and who changed its terms. Mara says care without truth would only make a softer version of the same trap.",
        "The first public tending is awkward. A carpenter wants the flame brighter; a former patient cannot sleep when it shines through her window. They argue until someone proposes a shutter and a written rotation. The compromise looks small beside the castle. It is also the first rule of October that a person hurt by the rule has been allowed to change."
      ],
      "dialogue": []
    },
    {
      "id": "monsters-unbound",
      "title": "Those Who Were More Than Their Shapes",
      "art": "wolf",
      "disposition": "mercy",
      "resolutionTag": "defy",
      "conditionsHint": "A mercy-led journey concluded by breaking the authority that commanded its creatures.",
      "paragraphs": [
        "You and Iona free the living names before breaking the crown. When it breaks, Daniel’s bell stops commanding him. His body does not become human again. He stands in the infirmary yard with long hands folded carefully away from the residents, waiting to learn what freedom can mean in a shape that frightens them.",
        "Mara refuses to make the returned patients responsible for comforting him. Silas visits first. Later Agnes brings the exercise book that remembers the caretaker’s kindness. Daniel listens without asking the account to excuse his teeth or the nights he hunted.",
        "The Cantor learns silence. The Widow closes her false doors and begins mourning without another captive to keep hope warm. None becomes harmless merely because a master is gone. The town must practice boundaries as carefully as mercy.",
        "Daniel leaves blood on the threshold where his extended nails scrape the stone. Agnes walks beside him only as far as the first gate. She cannot promise the town that he is harmless. She can require that he be recognized as someone harmed, and that any necessary boundary be chosen openly. Beyond the lantern’s reach, his damaged human breathing continues for a long time."
      ],
      "dialogue": []
    },
    {
      "id": "long-watch",
      "title": "The Long Watch, Honestly Named",
      "art": "castle",
      "disposition": "mercy",
      "resolutionTag": "bargain",
      "conditionsHint": "A mercy-led journey accepted a clearly named sacrifice that remains an unfinished debt.",
      "paragraphs": [
        "The residents wake, and the town receives them. Your bargain keeps the lantern quiet while others begin the work it postpones. Iona will not let anyone call your place beside the flame a happy ending. She calls it a watch, and writes what must happen before it can end.",
        "Mara brings the first practical account: households willing to shelter the returned, neighbors ready to read the names, an infirmary prepared to hear the whole story. Silas brings mistakes as well as successes, because the lantern thrives when visitors offer only comforting news.",
        "The watch begins without an anthem. Mara cleans the instruments, Agnes reads the patient roll and Silas checks the bolts from the side that opens. A missing response sends them to the room rather than to an eraser. Fear has not left October. It has acquired tasks, limits and people who must explain what they did while other people were afraid."
      ],
      "dialogue": []
    },
    {
      "id": "crown-broken",
      "title": "The Crown in the River",
      "art": "castle",
      "disposition": "courage",
      "resolutionTag": "defy",
      "conditionsHint": "A courage-led journey concluded by breaking the crown and refusing a replacement keeper.",
      "paragraphs": [
        "The crown breaks before the sun reaches the gallery. Its fragments fall like dull, ordinary iron. The residents wake in a room with windows that show only the real garden. Iona’s machine turns freely for a moment, then stops because there is nobody left for it to hold.",
        "The town hears the break as a bell that cannot ring twice. People run toward the castle expecting disaster. They find frightened patients, an exhausted watchmaker and a King who no longer possesses an answer that can hide the question.",
        "When the crown splits, the wound beneath it remains. The King is alive and can be questioned. Mara dresses his forehead with the same care she gives the people he imprisoned, then has the keys taken from him. Compassion is allowed in the room. Control is no longer its reward."
      ],
      "dialogue": []
    },
    {
      "id": "dawn-road",
      "title": "The Road Beyond the Festival",
      "art": "castle",
      "disposition": "courage",
      "resolutionTag": "release",
      "conditionsHint": "A courage-led journey concluded by opening escape and real routes home.",
      "paragraphs": [
        "You hold the castle’s exit until the last resident crosses it. The lantern reaches for another keeper and finds only morning air. Mara counts people without reducing them to a number. Silas goes back once more to make certain nobody was hidden by a curtain or frightened into silence.",
        "At the old platform, the train’s destination board is taken down. The carriage doors are opened from inside. The residents choose the real road above ground, even when it leads toward uncertain households and difficult explanations.",
        "The town has not become safe merely because an escape exists. But it has lost the right to call captivity the only safe choice. Iona marks every route on a map the council cannot keep in a locked drawer.",
        "You find the conductor’s missing fingernail in the dressing Silas kept. At the depot, nobody knows where the conductor has gone. The road out of October is open, but the absence follows you onto it. You leave copies of the register before taking your seat. Departure can become another silence if it carries every witness away."
      ],
      "dialogue": []
    },
    {
      "id": "town-unmasked",
      "title": "The Festival That Stopped Applauding",
      "art": "wolf",
      "disposition": "courage",
      "resolutionTag": "witness",
      "conditionsHint": "A courage-led journey concluded with public truth instead of another comforting order.",
      "paragraphs": [
        "The town’s applause stops. In the silence, the mayor’s next explanation sounds like the small, frightened excuse it is. You tell the account without making yourself its hero, and let the returning residents interrupt wherever adults have understood them poorly.",
        "Merrin lays the costumes on the platform. Agnes brings the photographs. Iona reads the agreement beside its amendments. People who signed cannot disappear into an unnamed council, and people who refused cannot be remembered merely as troublemakers.",
        "Under the final mask, the town has an ordinary face. Men and women who signed renewals stand beside people who suspected and looked away. Several ask whether their fear excuses them. Agnes will hear their accounts. She will not amend the patients’ records to make those accounts easier to endure. The hearing begins while the lantern is still burning."
      ],
      "dialogue": []
    },
    {
      "id": "one-more-year",
      "title": "One More Year Is Still a Bargain",
      "art": "widow",
      "disposition": "courage",
      "resolutionTag": "bargain",
      "conditionsHint": "A courage-led journey chose an explicit debt to force an immediate rescue.",
      "paragraphs": [
        "You buy the residents a morning with something the lantern was not entitled to take. They return, and the King keeps the exact terms he was made to speak aloud. For a while, the rescue feels large enough to drown out the cost.",
        "Then ordinary life resumes below the castle. Gratitude becomes a speech, the speech becomes a plaque, and the plaque begins doing the work of an excuse. Iona refuses to attend its unveiling. Mara asks when the promised end of your debt will be discussed instead.",
        "The lantern remains capable of waiting. It does not need the old King if the town learns to admire a new sacrifice without examining the arrangement beneath it. Silas visits with letters that keep you connected to people rather than only their thanks.",
        "A year from now, somebody may offer October a painless way to remember this night. You write that warning beside the lantern’s maintenance instructions. Below it, Beatrice adds the measurements of her healing wrist and the dates of her treatment. Pain should not become a ceremony that future officials can inherit. It should remain evidence that lets them prevent another injury."
      ],
      "dialogue": []
    }
  ],
  "audience": "adult"
};
export const STORY_TITLE=story.title;
export const STORY_SUBTITLE=story.subtitle;
export const STORY_VERSION=story.version;
export const ART=story.art;
export const CHARACTERS=story.characters;
export const CHAPTERS=story.chapters;
export const PASSAGES=story.passages;
export const ENDINGS=story.endings;
export default story;
