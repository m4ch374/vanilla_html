// =============================================
// Setup
const data = {
  "books": [
    {
      "id": 1,
      "title": "86 -Eighty Six-",
      "author": "Asato Asato",
      "description": "The Republic of San Magnolia has been at war with the Empire of Giad for nine years. Though it initially suffered devastating losses to the Empire's autonomous mechanized Legions, the Republic has since developed its own autonomous units, called Juggernauts, which are directed remotely by a Handler. While on the surface, the public believes the war is being fought between machines, in reality, the Juggernauts are being piloted by humans, all of whom are \"86\"—the designation given to the Colorata minority of San Magnolia. The 86 originally had equal rights, but were persecuted and scapegoated by the dominant Alba race and the Alba-supremacist Republic government to the point where Colorata were both officially designated and popularly considered subhuman. The 86 were not permitted to have personal names and were immured in internment camps in the 86th District (their namesake), all the while being forced to fight in the Republic's war with the Empire to receive better treatment.\n\nMajor Vladilena \"Lena\" Milizé, an Alba noble and military officer in the San Magnolian military, is an outspoken activist against the grave mistreatment of the nation's Colorata minority, and the willful deception of the general public by the Republic government. She is assigned as the Handler of the Spearhead Squadron of the Eastern Front: an elite unit composed entirely of 86 veterans who have earned names. Led by their squad leader, Shinei \"The Undertaker\" Nouzen, the Spearhead Squadron is infamous among military officials. Its notoriety stems from the state in which its commanding officers are left: Handlers presiding over the squad have descended into insanity and some have gone as far as committing suicide. Lena, an avowed 86 sympathizer, gets to know the Spearhead Squadron in her time as head of the contingent. At the same time, Lena and Shinei learn a dark secret: the Republic and the war with the Empire are not what they seem.",
      "cover": "../assets/images/books/86_light_novel.jpg",
      "price": "23.80"
    },
    {
      "id": 2,
      "title": "Vinland Saga",
      "author": "Makoto Yukimura",
      "description": "In 1013 AD, the young Thorfinn works for Askeladd in the hopes of challenging him to a duel and killing him in revenge for his father Thors' death, when they were attacked by him on a journey to England. Askeladd's company finds employment as mercenaries under King Sweyn in the Danish invasion of London by the British and Thorkell the Tall, Thorfinn's uncle who served with Thors in the Jomsvikings. When Thorkell takes Sweyn's son Prince Canute captive, Askeladd's company capture the prince with the intent of selling him to either side for a profit. Askeladd changes his plan to act on his personal agenda as a descendant of Artorius, to secure his mother's homeland of Wales from being invaded. Askeladd is ultimately forced to sacrifice himself by killing Sweyn during an audience when the king announces his plan to invade Wales, feigning madness as Canute kills him, so the Prince could take over Dane-occupied England without question. Thorfinn tries to assassinate King Canute, leaving him with a scar, and is subsequently sentenced to a life of enslavement by a sympathetic King Canute.\n\nOne year after Askeladd's death, Thorfinn works on a farm owned by Ketil, a rich farmer who treats slaves well. He later befriends another slave named Einar. With the help of Einar, the farm's head of security Snake, and Ketil's father Sverker, Thorfinn learns to let go of his dark past and is encouraged by dreams of his father and Askeladd to pursue a life of peace, away from the Vikings' violent lifestyle. Canute has become both King of England and Denmark after poisoning his brother Harald, and begins a campaign with Ketil's farm, tricking Ketil's sons Thorgil and Olmar into justifying the seizure, with Ketil's men easily defeated by Canute's Jomsvikings. Thorfinn confronts Canute to convince him to spare the farmers. Upon witnessing Thorfinn's transformation into a pacifist, Canute relinquishes his claim to the farm. Thorfinn and Einar are subsequently released from their enslavement, and they depart with Leif Erikson, an old friend of Thorfinn's late father Thors, to sail back to Iceland.",
      "cover": "../assets/images/books/vinland_saga_cover.jpg",
      "price": "20.35"
    },
    {
      "id": 3,
      "title": "Violet Evergarden",
      "author": "Kana Akatsuki",
      "description": "The story follows Violet Evergarden's journey of reintegrating back into society after the war is over as she is no longer a soldier, and her search for her life's purpose in order to understand the last words her mentor and guardian, Major Gilbert, had said to her: \"I love you.\"",
      "cover": "../assets/images/books/violet_evergarden_cover.jpg",
      "price": "33.84"
    },
    {
      "id": 4,
      "title": "Attack on Titan",
      "author": "Hajime Isayama",
      "description": "Eren Yeager is a boy who lives in the town of Shiganshina, located on the outermost of three circular walls which protect their inhabitants from Titans. In the year 845, the first wall (Wall Maria) is breached by two new types of Titans, the Colossal Titan and the Armored Titan. During the incident, Eren's mother is eaten by a Smiling Titan while Eren escapes. He swears revenge on all Titans and enlists in the military along with his childhood friends Mikasa Ackerman and Armin Arlert. Five years after Shiganshina's fall, the Colossal Titan attacks the city of Trost, located in the second innermost wall (Wall Rose). Eren helps to successfully defend the city after he discovers a mysterious ability to turn himself into a sentient Attack Titan. Additionally, he regains memories of his father giving him this ability shortly after the fall of Wall Maria, and telling him that the truth about their world can be found in their basement in Shiganshina. These events draw the attention of the Survey Corps and their commander, Erwin Smith, who intend to use his power to reclaim Wall Maria and reach the Yeagers' basement. Eren, Mikasa, and Armin are transferred to the Special Operations Squad, under the care of Levi Ackerman and Hange Zoë.",
      "cover": "../assets/images/books/attack_on_titan_cover.jpg",
      "price": "18.90"
    },
    {
      "id": 5,
      "title": "Frieren: Beyond Journey's End",
      "author": "Kanehito Yamada",
      "description": "The story follows elven mage Frieren, a former member of the party of adventurers who defeated the Demon King and restored harmony to the world after a ten-years-quest. In the past, the heroic group included Frieren, human hero Himmel, dwarven warrior Eisen and human priest Heiter. Before they part, they observe the Era Meteors together, a meteor shower that occurs once in fifty years. Frieren agrees to see them again and offer them a better view the next time the celestial event occurs. Frieren then departs and travels the world in pursuit of magical knowledge.\n\nFrieren returns to the capital fifty years later; however, humanity has changed, and her former companions have distinctly aged. After one last adventure to see the meteor shower, Himmel dies of old age. During the funeral, Frieren expressed guilt for not attempting to learn more about him. Frieren then pays a visit to her other former comrades. She accepts an offer to teach and care for Fern, an orphaned child adopted by Heiter. She also receives an invitation to travel far north, to the resting place of souls, and see Himmel again to bid the hero a fitting farewell and express her feelings. To fulfill those requests, Frieren embarks on a journey together with Fern while still pursuing her passion for learning magic.\n\nFrieren's elven nature grants her an extremely long lifespan, causing her to view periods of years or decades as ephemeral (this perception of time makes her consider the ten-year adventure with Himmel's party a fleeting experience). The story thus takes place across a long time, with periodic flashbacks accompanied by the physical and mental development of characters apart from Frieren herself.",
      "cover": "../assets/images/books/beyond_journeys_end_cover.jpg",
      "price": "24.50"
    }
  ]
}

const BookDetail = (meta_data) => {
  return `
    <div id="${meta_data.id}" class="details">
      <div class="details-banner">
        <img alt="cover" src="${meta_data.cover}" />
        <div class="details-banner-text">
          <h1>${meta_data.title}</h1>
          <div>by ${meta_data.author}</div>
          <div>$${meta_data.price}</div>
          <button class="select-item"></button>
        </div>
      </div>

      <h1>Plot</h1>
      <hr class="seperator" />
      <p>
        ${meta_data.description}
      </p>
    </div>
  `
}

const selectElemHandler = (bookId) => {
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify(['0']))
  }

  let cart = JSON.parse(localStorage.getItem("cart"))
  const key = bookId
  if (cart.includes(key)) {
    cart = cart.filter(x => x !== key)
  } else {
    cart.push(key)
  }

  localStorage.setItem("cart", JSON.stringify(cart))
}
// =============================================


// Actual script
const searcher = new URLSearchParams(window.location.search)

const bookId = searcher.get("book")
const meta_data = data.books.filter(x => parseInt(x.id) === parseInt(bookId))[0]

const changeBtnStyle = () => {
  const btn = document.querySelector(".select-item")

  const selected = localStorage.getItem("cart") && localStorage.getItem("cart").includes(bookId)

  if (!selected) {
    btn.textContent = "Add to cart"
    btn.classList.add("add-item")
    btn.classList.remove("remove-item")
  } else {
    btn.textContent = "Remove from cart"
    btn.classList.add("remove-item")
    btn.classList.remove("add-item")
  }
}

document.getElementById("book-content").innerHTML = BookDetail(meta_data)
document.querySelector(".select-item").addEventListener("click", () => {
  selectElemHandler(bookId)
  changeBtnStyle()
})

changeBtnStyle()
