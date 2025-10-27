import React, { useState, useMemo } from 'react';
import { Search, Globe, BookOpen, Atom, Palette, Music, Trophy, Landmark, Heart, Leaf, Calculator, Code, Map, Users } from 'lucide-react';

const KnowledgeApp = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      id: 'geography',
      name: 'Geography',
      icon: Globe,
      color: 'bg-blue-500',
      topics: [
        {
          title: 'Continents and Oceans',
          content: 'Earth has 7 continents covering about 29% of the planet surface. Asia is the largest and most populous continent, spanning 44.58 million square km and home to over 4.7 billion people. Africa is the second-largest continent with 54 countries and incredible biodiversity. North America includes 23 countries from Canada to Panama. South America is known for the Amazon rainforest and Andes mountains. Antarctica is the coldest, driest, and windiest continent with no permanent human residents. Europe has had enormous historical and cultural influence. Australia and Oceania includes thousands of islands across the Pacific Ocean. The 5 oceans are: Pacific Ocean (largest, covering more area than all land combined, deepest point Mariana Trench at 11,034m), Atlantic Ocean (second-largest, separates Americas from Europe and Africa), Indian Ocean (warmest ocean, vital for monsoons), Southern Ocean (encircles Antarctica, recognized as separate ocean in 2000), and Arctic Ocean (smallest, mostly covered with ice).'
        },
        {
          title: 'Highest Mountains',
          content: 'Mount Everest at 8,849 meters (29,032 feet) in the Himalayas between Nepal and Tibet is Earth highest peak above sea level. First successfully summited by Edmund Hillary and Tenzing Norgay in 1953. Over 6,000 people have reached the summit since then. K2 (8,611m) on the Pakistan-China border is the second-highest and considered more dangerous with a higher fatality rate. Kangchenjunga (8,586m) between Nepal and India means Five Treasures of Snow referring to its five peaks. Other notable eight-thousanders include Lhotse, Makalu, Cho Oyu, Dhaulagiri, Manaslu, and Nanga Parbat. The Himalayas formed around 50 million years ago from the collision of the Indian and Eurasian tectonic plates, and they continue to rise about 5mm per year. Other major mountain ranges include the Andes (longest continental range at 7,000km), the Rockies in North America, the Alps in Europe, and the Atlas Mountains in Africa.'
        },
        {
          title: 'Longest Rivers',
          content: 'The Nile River at approximately 6,650 km flowing through 11 countries in northeastern Africa is traditionally considered the longest river, though measurements vary. It has two major tributaries: the White Nile originating from Lake Victoria and the Blue Nile from Ethiopia. Ancient Egyptian civilization flourished along its banks for over 3,000 years. The Amazon River in South America (6,400 km) carries more water than any other river - about 20% of Earth river flow enters the ocean through the Amazon. Its drainage basin covers 7 million square km, and it contains over 3,000 fish species. The Yangtze (6,300 km) is Asia longest river, flowing through China and home to the Three Gorges Dam. The Mississippi-Missouri system (6,275 km) drains most of the central United States. Other major rivers include the Yenisei-Angara-Selenga in Siberia, the Yellow River (cradle of Chinese civilization), and the Congo (deepest river in the world).'
        },
        {
          title: 'Major Deserts',
          content: 'Antarctica is technically Earth largest desert at 14 million square km, receiving less than 2 inches of precipitation annually. The Sahara Desert in North Africa is the largest hot desert, covering 9 million square km, stretching from the Atlantic Ocean to the Red Sea. It features sand dunes up to 180m high, but is mostly rocky hamada and gravel plains. The Sahara experiences extreme temperature variations. The Arabian Desert includes the Rub al Khali (Empty Quarter), one of the largest continuous sand deserts. The Gobi Desert in Mongolia and China is a cold desert known for dinosaur fossils and the Silk Road trading routes. The Kalahari in southern Africa supports surprising wildlife including lions and elephants during rainy season. Australia contains several deserts covering 18% of the continent. The Atacama Desert in Chile is the driest place on Earth. North America deserts include the Mojave, Sonoran, and Chihuahuan deserts.'
        }
      ]
    },
    {
      id: 'history',
      name: 'History',
      icon: Landmark,
      color: 'bg-amber-500',
      topics: [
        {
          title: 'Ancient Civilizations',
          content: 'Mesopotamia emerged around 3500 BCE with the Sumerians who invented cuneiform writing (oldest writing system), the wheel, and the concept of time. The Code of Hammurabi (1754 BCE) was one of the earliest written legal codes. Ancient Egypt (3100-30 BCE) unified under Pharaoh Narmer, built pyramids as royal tombs, developed hieroglyphic writing, advanced medicine and mathematics. The Indus Valley Civilization (3300-1300 BCE) featured advanced urban planning with grid patterns and sophisticated drainage systems. Ancient China Shang Dynasty (1600-1046 BCE) developed oracle bones for divination and early Chinese characters. Ancient Greece gave us democracy, Olympic Games, philosophy, literature, mathematics, medicine, and architecture. The Roman Empire spread across Europe, North Africa, and Middle East, built roads and aqueducts, developed Roman law and Latin language.'
        },
        {
          title: 'World Wars',
          content: 'World War I (1914-1918) began with the assassination of Archduke Franz Ferdinand in Sarajevo. The Central Powers fought the Allied Powers. It was the first total war with trench warfare, machine guns, tanks, and poison gas. The Treaty of Versailles imposed harsh reparations on Germany and created the League of Nations. Total casualties: 17 million deaths. World War II (1939-1945) began when Nazi Germany invaded Poland. The Axis Powers fought the Allies. Major events included the Holocaust (6 million Jews murdered), D-Day Normandy invasion, and island-hopping Pacific campaign. The war ended with Germany surrender in May 1945 and Japan surrender in August 1945 after atomic bombs on Hiroshima and Nagasaki. Total deaths: 70-85 million people. The war led to formation of United Nations, decolonization, and the Cold War.'
        },
        {
          title: 'Renaissance',
          content: 'The Renaissance was a cultural movement spanning the 14th-17th centuries, beginning in Florence, Italy around 1300. It marked the transition from medieval to modern times, reviving interest in classical Greek and Roman culture. Key characteristics included humanism, individualism, secularism, and scientific inquiry. In art, the Renaissance introduced perspective, realism, and human anatomy study. Leonardo da Vinci was the quintessential Renaissance Man - painter, inventor, scientist, anatomist, engineer. Michelangelo sculpted David and painted the Sistine Chapel ceiling. Raphael mastered composition and grace. In literature, Dante wrote The Divine Comedy and Shakespeare emerged in the English Renaissance. Scientific revolution figures included Copernicus, Galileo, and Vesalius. The printing press revolutionized knowledge dissemination.'
        },
        {
          title: 'Industrial Revolution',
          content: 'The Industrial Revolution began in Britain around 1760-1840 and transformed society from agrarian economy to one dominated by industry and machine manufacturing. Key innovations included the steam engine, spinning jenny, and power loom revolutionizing textile production. The first railway opened in 1825. Factories replaced cottage industries, leading to mass urbanization. Living conditions were often harsh with long working hours, child labor, low wages, and pollution. This led to labor movements and reforms. The Second Industrial Revolution (1870-1914) brought electricity, internal combustion engine, telephone, and assembly line production. The revolution spread to USA, Germany, France, and Japan. Social changes included rise of middle class and public education, but also wealth inequality and environmental damage.'
        }
      ]
    },
    {
      id: 'science',
      name: 'Science',
      icon: Atom,
      color: 'bg-purple-500',
      topics: [
        {
          title: 'Periodic Table',
          content: 'The Periodic Table organizes 118 known chemical elements by atomic number. Dmitri Mendeleev created the first widely recognized periodic table in 1869. Elements are arranged in 7 horizontal periods and 18 vertical groups. Elements in the same group have similar chemical properties. Group 1: Alkali metals (lithium, sodium, potassium) are highly reactive. Group 2: Alkaline earth metals. Groups 3-12: Transition metals (iron, copper, gold, silver) are good conductors. Group 17: Halogens are highly reactive non-metals. Group 18: Noble gases are inert and stable. Elements 1-92 occur naturally; elements 93 and above are synthetic. Hydrogen is the simplest and most abundant element in the universe. Carbon is the basis of all life. The periodic table reveals patterns in atomic radius, ionization energy, electronegativity, and reactivity.'
        },
        {
          title: 'Theory of Relativity',
          content: 'Albert Einstein theories revolutionized physics by showing that space and time are interconnected and relative, not absolute. Special Relativity (1905) introduced revolutionary concepts: The speed of light is constant for all observers. Time dilation means moving clocks run slower. Mass-energy equivalence is shown by E=mc squared. General Relativity (1915) describes gravity as curvature of spacetime caused by mass and energy. Massive objects like Earth curve spacetime, and other objects follow these curves creating orbits. Predictions confirmed include light bending near massive objects, existence of black holes, and gravitational waves. Relativity has been confirmed thousands of times and is essential for GPS, particle accelerators, and understanding the cosmos.'
        },
        {
          title: 'Human Body Systems',
          content: 'The human body contains 11 interconnected organ systems. Circulatory system: Heart pumps blood through 100,000 km of blood vessels, delivering oxygen and nutrients. Heart beats about 100,000 times daily. Respiratory system: Lungs exchange gases, we breathe 20,000 times daily. Digestive system: Processes food into energy through mouth, stomach, intestines, liver, and pancreas. Nervous system: Brain with 86 billion neurons controls everything, transmitting electrical signals. Muscular system: 600 plus muscles enable movement. Skeletal system: 206 bones provide structure and protect organs. Endocrine system: Glands produce hormones regulating growth and metabolism. Immune system: Defends against pathogens. Integumentary system: Skin is the largest organ. Urinary system: Kidneys filter blood daily. Reproductive system: Enables species continuation.'
        },
        {
          title: 'Evolution',
          content: 'Evolution is the change in heritable characteristics of populations over successive generations. Charles Darwin and Alfred Russel Wallace independently developed the theory. Natural Selection means organisms with traits better suited to their environment are more likely to survive and reproduce. Examples include Darwin finches on Galapagos Islands with different beak shapes and peppered moths in Industrial Revolution England. Genetic variation comes from random mutations and sexual reproduction. DNA passes traits from parents to offspring. Evidence includes the fossil record showing progression from simple to complex life, comparative anatomy revealing homologous structures, embryology showing similar early development, molecular biology with DNA similarities, and direct observation of evolution happening. Humans share common ancestor with apes from 6-7 million years ago.'
        },
        {
          title: 'Solar System',
          content: 'Our Solar System formed 4.6 billion years ago from a rotating cloud of gas and dust. The Sun contains 99.86% of the system mass. Eight planets orbit: Mercury (smallest, closest to Sun, extreme temperatures), Venus (hottest planet due to greenhouse effect), Earth (only known planet with life, 71% water), Mars (Red Planet, evidence of ancient water), Jupiter (largest planet, gas giant, Great Red Spot storm, 95 moons), Saturn (famous rings, 146 moons), Uranus (ice giant, rotates on side), Neptune (farthest planet, strongest winds). Dwarf planets include Pluto. The Universe began 13.8 billion years ago with the Big Bang. Observable universe is 93 billion light-years across. Contains billions of galaxies, each with billions of stars. Over 5,000 exoplanets discovered. Universe comprises 5% normal matter, 27% dark matter, 68% dark energy.'
        }
      ]
    },
    {
      id: 'literature',
      name: 'Literature',
      icon: BookOpen,
      color: 'bg-green-500',
      topics: [
        {
          title: 'William Shakespeare',
          content: 'William Shakespeare (1564-1616) is widely regarded as the greatest writer in English. Born in Stratford-upon-Avon, he wrote 37 plays, 154 sonnets, and 2 long narrative poems. Major tragedies include Hamlet (prince seeking revenge, famous soliloquy), Macbeth (Scottish general murderous ambition), Othello (destroyed by jealousy), King Lear (aging king dividing kingdom), and Romeo and Juliet (star-crossed lovers). Famous comedies include A Midsummer Night Dream (magical forest with fairies), Much Ado About Nothing, The Tempest, and Twelfth Night. History plays include Henry V and Richard III. Shakespeare invented over 1,700 words still used today including addiction, eyeball, fashionable, and lonely. He created countless phrases like break the ice and heart of gold. His Globe Theatre opened in 1599. His works explore universal themes of ambition, jealousy, love, and revenge, making them timeless.'
        },
        {
          title: 'Literary Movements',
          content: 'Literature evolved through distinct movements. Classical Literature featured epic poetry like Homer Iliad and Odyssey, drama by Sophocles, and philosophy by Plato. Medieval Literature included religious themes and Dante Divine Comedy. Renaissance brought humanism, Shakespeare, and Milton Paradise Lost. Enlightenment emphasized reason with Voltaire Candide. Romanticism celebrated emotion and nature with Wordsworth, Byron, Shelley, and Mary Shelley Frankenstein. Realism depicted everyday life through Tolstoy War and Peace and Dostoevsky Crime and Punishment. Modernism featured experimentation with Joyce Ulysses, Woolf Mrs Dalloway, and Kafka The Metamorphosis. Postmodernism brought irony and magical realism with Garcia Marquez One Hundred Years of Solitude. Each movement reflected historical context and expanded literature boundaries.'
        },
        {
          title: 'World Literature',
          content: 'Great works from around the world include ancient epics like Gilgamesh (oldest known literature), Mahabharata and Ramayana from India. Chinese classics include Journey to the West and Dream of the Red Chamber. Japanese literature features Tale of Genji (first novel) and Basho haiku poetry. Arabic literature includes One Thousand and One Nights and Rumi poetry. Russian masters include Tolstoy, Dostoevsky, and Chekhov. French literature features Victor Hugo Les Miserables and Proust. German includes Goethe Faust and Kafka. Spanish includes Cervantes Don Quixote (first modern novel). Latin American includes Marquez, Borges, and Neruda. African includes Achebe Things Fall Apart. Nobel Prize winners represent global literary achievement across cultures and languages.'
        }
      ]
    },
    {
      id: 'art',
      name: 'Art',
      icon: Palette,
      color: 'bg-pink-500',
      topics: [
        {
          title: 'Art Movements',
          content: 'Renaissance introduced perspective and realism with Leonardo, Michelangelo, and Raphael. Baroque brought drama and emotion with Caravaggio and Rembrandt. Romanticism emphasized nature and imagination with Turner and Delacroix. Realism depicted ordinary life. Impressionism captured light and color with Monet Water Lilies, Renoir, and Degas painting outdoors. Post-Impressionism included Cezanne geometric forms and Van Gogh emotional color in Starry Night. Cubism showed multiple viewpoints with Picasso and Braque. Surrealism explored dreams with Dali Persistence of Memory (melting clocks) and Magritte. Abstract Expressionism featured Pollock drip paintings and Rothko color fields. Pop Art included Warhol Campbell Soup Cans and Lichtenstein comic style. Contemporary art includes installation, performance, digital, and conceptual art challenging traditional definitions.'
        },
        {
          title: 'Famous Artists',
          content: 'Leonardo da Vinci created Mona Lisa (enigmatic smile, most famous painting), The Last Supper, and Vitruvian Man. Michelangelo sculpted David (marble masterpiece) and Pieta, and painted Sistine Chapel ceiling. Vincent van Gogh painted Starry Night, Sunflowers series, and Bedroom in Arles with emotional intensity and bold colors. Pablo Picasso co-founded Cubism with Les Demoiselles d Avignon and painted Guernica (anti-war). Claude Monet was father of Impressionism with Water Lilies series. Frida Kahlo created self-portraits exploring identity and Mexican culture. Salvador Dali painted surrealist dreams with melting clocks. Edvard Munch painted The Scream showing anxiety. Andy Warhol pioneered Pop Art with Campbell Soup Cans and Marilyn Monroe prints. Each artist revolutionized art and influenced generations.'
        }
      ]
    },
    {
      id: 'music',
      name: 'Music',
      icon: Music,
      color: 'bg-indigo-500',
      topics: [
        {
          title: 'Classical Music',
          content: 'Baroque period featured Johann Sebastian Bach (Brandenburg Concertos, master of counterpoint), Vivaldi (Four Seasons), and Handel (Messiah with Hallelujah chorus). Classical period brought Mozart (child prodigy, 600 plus works, operas, symphonies) and Haydn (father of symphony). Romantic period included Beethoven (bridge to Romantic, 9 symphonies, went deaf yet composed), Chopin (piano poet), Schubert, Brahms, Tchaikovsky (ballets Swan Lake and Nutcracker), Wagner (epic operas), and Liszt (virtuoso pianist). Impressionist composers include Debussy (Clair de Lune) and Ravel (Bolero). 20th Century featured Stravinsky (Rite of Spring) and minimalism with Philip Glass. Classical music developed complex forms including symphony, concerto, sonata, opera, and string quartet.'
        },
        {
          title: 'Musical Instruments',
          content: 'STRING family includes Violin (highest, played with bow), Viola, Cello (held between knees), Double Bass (deepest), Harp (47 strings), Guitar (6 strings, most popular), and Piano (88 keys, hammers strike strings). WOODWIND family includes Flute (air blown across hole), Clarinet (single reed), Oboe (double reed, tunes orchestra), Bassoon (double reed, lowest), and Saxophone (metal but woodwind, jazz icon). BRASS family includes Trumpet (bright fanfare sound), French Horn (mellow), Trombone (slide), and Tuba (largest, deepest). PERCUSSION includes Drums (timpani, snare, bass), Cymbals, Xylophone, and Glockenspiel. Each instrument has unique timbre and role. Orchestra typically has 100 musicians with strings as majority.'
        }
      ]
    },
    {
      id: 'sports',
      name: 'Sports',
      icon: Trophy,
      color: 'bg-red-500',
      topics: [
        {
          title: 'Olympic Games',
          content: 'Ancient Olympics began 776 BCE in Olympia, Greece as religious festival honoring Zeus. Modern Olympics revived in 1896 in Athens. Summer Olympics held every 4 years featuring athletics, swimming, gymnastics, basketball, football, volleyball, and over 30 sports. Winter Olympics include skiing, snowboarding, ice skating, ice hockey, and bobsled. Olympic motto: Faster, Higher, Stronger. Olympic rings represent five continents united. Paralympics for athletes with disabilities started 1960. Top medal-winning nations include USA, Russia, Germany, Britain, and China. Hosting Olympics brings prestige but massive cost. Olympics promote peace, international cooperation, and athletic excellence, inspiring billions worldwide.'
        },
        {
          title: 'Football Soccer',
          content: 'Football is the world most popular sport, played by 250 plus million players in over 200 countries. Two teams of 11 players try to score goals. Match lasts 90 minutes. FIFA governs worldwide. FIFA World Cup held every 4 years since 1930, most prestigious tournament, watched by billions. Brazil won record 5 titles, Germany and Italy 4 each, Argentina, France, Uruguay, England, and Spain are champions. Famous clubs include Real Madrid, Barcelona, Manchester United, Liverpool, and Bayern Munich. Greatest players include Pele (Brazil, 1,000 plus goals), Maradona (Argentina), Lionel Messi (Argentina, 8 Ballon d Or awards, 2022 World Cup), and Cristiano Ronaldo (Portugal, 800 plus career goals). Positions include Goalkeeper, Defenders, Midfielders, and Forwards. Football unites and divides, transcends language and culture.'
        },
        {
          title: 'Basketball',
          content: 'Basketball invented by James Naismith in 1891 in Springfield, Massachusetts. Two teams of 5 players score by shooting ball through 10-foot high hoop. Game has four 12-minute quarters in NBA. Scoring: field goal inside arc equals 2 points, beyond three-point line equals 3 points, free throw equals 1 point. NBA founded 1946 with 30 teams. Greatest players include Michael Jordan (Chicago Bulls, 6 championships, greatest ever), LeBron James (4 championships, all-around excellence), Magic Johnson, Larry Bird, Kareem Abdul-Jabbar, Kobe Bryant, Shaquille O Neal, and Stephen Curry (revolutionized with 3-point shooting). Positions include Point Guard, Shooting Guard, Small Forward, Power Forward, and Center. Basketball played worldwide with Olympics since 1936. USA dominates with Dream Team. WNBA founded 1997. Basketball is fast-paced and emphasizes athleticism, skill, and teamwork.'
        },
        {
          title: 'Cricket',
          content: 'Cricket is immensely popular in Commonwealth nations, especially India, Pakistan, Bangladesh, Sri Lanka, England, Australia, South Africa, and West Indies. Two teams of 11 players. Batting team tries to score runs by hitting ball and running between wickets 22 yards apart. Bowling team tries to get batsmen out. Formats include Test Cricket (5 days, traditional), One Day International (50 overs per side, 8 hours), and Twenty20 (20 overs per side, 3 hours, most popular). ICC Cricket World Cup held every 4 years. Australia won 6 ODI World Cups. The Ashes is Test series between England and Australia since 1882. Greatest players include Sir Donald Bradman (Australia, batting average 99.94, most dominant athlete), Sachin Tendulkar (India, most international runs, god-like status), Sir Vivian Richards (West Indies), Brian Lara, Shane Warne (leg-spin bowler, 708 Test wickets), and Virat Kohli (India modern great). Positions include Batsmen, Bowlers (fast bowlers, spin bowlers), Wicket-keeper, and All-rounders. Cricket is especially revered in India where it is considered a religion.'
        }
      ]
    },
    {
      id: 'health',
      name: 'Health',
      icon: Heart,
      color: 'bg-rose-500',
      topics: [
        {
          title: 'Nutrition',
          content: 'Essential nutrients include Carbohydrates (main energy source from grains, fruits, vegetables), Proteins (building blocks of muscles from meat, fish, eggs, beans), Fats (energy storage, healthy fats from olive oil, avocados, nuts, fish), Vitamins (Vitamin A for vision, Vitamin C for immune system, Vitamin D for bones, B vitamins for energy), Minerals (Calcium for bones, Iron for blood, Potassium for nerves), and Water (60% of body weight, need 2-3 liters daily). Balanced diet includes fruits, vegetables, whole grains, lean proteins, healthy fats, and limits processed foods and added sugars. Mediterranean diet is linked to longevity. Obesity epidemic is caused by excess calories and sedentary lifestyle, linked to diabetes, heart disease, and cancer.'
        },
        {
          title: 'Exercise',
          content: 'WHO recommends 150-300 minutes moderate aerobic activity or 75-150 minutes vigorous activity weekly, plus muscle-strengthening activities 2 plus days. Benefits include strengthening heart, lowering blood pressure, reducing cholesterol, weight management, building muscle and bone strength, improving mental health by releasing endorphins and reducing stress and anxiety, disease prevention, longevity, better sleep, and increased energy. Types include Aerobic exercise (running, cycling, swimming), Strength training (lifting weights, pushups, squats), Flexibility (stretching, yoga), and Balance (tai chi). Start slowly if inactive with gradual progression. Consistency is key, even 10-minute walks add up. Movement throughout day complements structured exercise.'
        },
        {
          title: 'Mental Health',
          content: 'Mental health encompasses emotional, psychological, and social well-being. Common conditions include Depression (persistent sadness, hopelessness, affects 280 million globally), Anxiety Disorders (excessive worry, most common mental illness), Bipolar Disorder (extreme mood swings), Schizophrenia (distorted thinking, hallucinations), PTSD (after traumatic events), OCD (intrusive thoughts, compulsive behaviors), and Eating Disorders. Treatment includes Psychotherapy (Cognitive Behavioral Therapy challenges negative thoughts), medications (antidepressants, anti-anxiety), and lifestyle changes (exercise, sleep, social connection, meditation). Stigma is decreasing but remains a barrier. 1 in 4 people experience mental health issues. Self-care practices include adequate sleep (7-9 hours), regular exercise, healthy diet, social connections, hobbies, setting boundaries, and limiting social media.'
        }
      ]
    },
    {
      id: 'environment',
      name: 'Environment',
      icon: Leaf,
      color: 'bg-emerald-500',
      topics: [
        {
          title: 'Climate Change',
          content: 'Climate change is long-term shift in global temperatures and weather patterns. Earth average temperature increased 1.1 degrees Celsius since pre-industrial times. Caused by burning fossil fuels releasing greenhouse gases like Carbon dioxide, Methane, and Nitrous oxide that trap heat in atmosphere. Evidence includes temperature records, melting glaciers and ice sheets, rising sea levels (20cm since 1900), more frequent extreme weather, and ocean acidification. Consequences include rising seas threatening coastal cities, extreme weather causing deaths and economic damage, droughts reducing food production, heat stress, ecosystem disruption, and species extinction. Solutions include transitioning to renewable energy, improving energy efficiency, electric vehicles, sustainable agriculture, protecting forests, and carbon capture technology. Paris Agreement aims to limit warming to well below 2 degrees Celsius. Current trajectory is toward 2.5-3 degrees warming by 2100. Next decades are critical for action.'
        },
        {
          title: 'Ecosystems',
          content: 'Major ecosystem types include Forests (tropical rainforests like Amazon are most biodiverse, temperate forests, boreal forests), Grasslands (savannas in Africa, prairies), Deserts (hot and cold with specialized adaptations), Tundra (Arctic with permafrost), Freshwater (rivers, lakes, wetlands), and Marine (oceans with coral reefs, kelp forests). Each ecosystem provides services including provisioning (food, water), regulating (climate, floods), supporting (nutrient cycles, photosynthesis), and cultural (recreation, spiritual). Biodiversity is variety of life with Earth having about 8.7 million species. Threats include habitat loss, climate change, pollution, overexploitation, and invasive species. Current extinction rate is 100-1000 times natural rate, considered sixth mass extinction. Conservation includes protected areas, endangered species programs, habitat restoration, and sustainable practices.'
        }
      ]
    },
    {
      id: 'mathematics',
      name: 'Mathematics',
      icon: Calculator,
      color: 'bg-cyan-500',
      topics: [
        {
          title: 'Number Systems',
          content: 'Natural numbers (1, 2, 3) are used for counting. Integers include negatives. Rational numbers are fractions or terminating decimals. Irrational numbers cannot be expressed as fractions including pi (3.14159, ratio of circle circumference to diameter), e (2.71828), square root of 2, and golden ratio phi (1.618 in nature and art). Real numbers include all rational and irrational numbers. Complex numbers extend reals and are essential for engineering and physics. Basic operations include Addition, Subtraction, Multiplication, and Division. Order of operations is Parentheses, Exponents, Multiplication and Division, Addition and Subtraction. Prime numbers (2, 3, 5, 7, 11, 13) are divisible only by 1 and themselves, building blocks of all numbers. Mathematics is the language of the universe, describing patterns and relationships.'
        },
        {
          title: 'Geometry',
          content: 'Geometry studies shapes, sizes, and positions. Basic concepts include Point (location), Line (infinite length), Plane (flat surface), and Angle (measured in degrees). Polygons include Triangle (3 sides, angles sum 180 degrees), Quadrilateral (4 sides), Pentagon (5), Hexagon (6). Triangle types include Equilateral (all sides equal), Isosceles (two sides equal), and Right triangle (one 90 degree angle). Pythagorean Theorem for right triangles states a squared plus b squared equals c squared where c is hypotenuse. Circles have radius, diameter (2 times radius), circumference equals 2 pi r, and area equals pi r squared. 3D solids include Cube, Sphere, Cylinder, Cone, and Pyramid. Trigonometry relates angles to side lengths using sine, cosine, and tangent functions.'
        }
      ]
    },
    {
      id: 'technology',
      name: 'Technology',
      icon: Code,
      color: 'bg-slate-500',
      topics: [
        {
          title: 'Computer History',
          content: 'Early computers include ENIAC (1945, room-sized). Transistor (1947) replaced vacuum tubes. Integrated circuits (1960s) enabled miniaturization. Microprocessor (Intel 4004, 1971) put CPU on single chip. Personal computers emerged 1970s-80s: Apple II, IBM PC, Macintosh. Moore Law states transistor count doubles every 2 years. Computer hardware includes CPU (brain, executes instructions), RAM (temporary storage), Storage (HDD or SSD stores data permanently), Motherboard, GPU (graphics, now AI), and Input/Output devices. Binary system uses 0s and 1s with units KB, MB, GB, TB. Smartphones like iPhone revolutionized computing, now more powerful than 1960s NASA computers. Quantum computers use qubits for exponentially faster calculations on certain problems.'
        },
        {
          title: 'Internet and Programming',
          content: 'Internet is global network of interconnected computers. Origins include ARPANET (1969), Email (1971), TCP/IP protocols (1983). World Wide Web (1989, Tim Berners-Lee) made Internet accessible with HTTP, HTML, hyperlinks, and browsers. Growth exploded 1990s with search engines like Google (1998), e-commerce like Amazon. Now 5 plus billion Internet users. Programming languages include C (systems programming), C++, Java (enterprise applications), Python (readable, data science, AI, beginner-friendly), JavaScript (web interactivity, most popular), PHP, Ruby, Go, Swift. Algorithms and data structures are fundamental. Software development includes writing, testing, debugging, version control with Git. Open-source movement allows free use and modification. Coding is increasingly essential skill.'
        },
        {
          title: 'Artificial Intelligence',
          content: 'Artificial Intelligence enables machines to perform tasks requiring human intelligence including learning, reasoning, problem-solving, and language understanding. Machine Learning algorithms learn patterns from data. Deep Learning uses artificial neural networks with multiple layers. Breakthrough in 2012 with image recognition. Applications include Computer Vision (facial recognition, autonomous vehicles), Natural Language Processing (chatbots, translation, Large Language Models like GPT), Speech Recognition (Siri, Alexa), Recommendation Systems (Netflix, YouTube), Game Playing (AlphaGo beat world champion), Robotics, Drug Discovery. Generative AI creates new content like Images (DALL-E, Midjourney), Text (ChatGPT, Claude), Music, and Video. Challenges include data requirements, bias, explainability, ethics (privacy, job displacement), and safety. AI is rapidly advancing and transforming industries and daily life.'
        }
      ]
    },
    {
      id: 'world',
      name: 'World',
      icon: Map,
      color: 'bg-orange-500',
      topics: [
        {
          title: 'Countries and Capitals',
          content: '195 countries recognized by UN. Largest by area: Russia (17.1 million square km), Canada, USA, China, Brazil. Smallest: Vatican City (0.44 square km within Rome), Monaco, San Marino. Most populous: India (1.43 billion, overtook China 2023), China (1.42 billion), USA (335 million), Indonesia, Pakistan, Nigeria. Important capitals include China (Beijing), India (New Delhi), USA (Washington DC), Indonesia (Jakarta), Brazil (Brasilia), Russia (Moscow), Japan (Tokyo), Germany (Berlin), UK (London), France (Paris), Italy (Rome), Spain (Madrid), Australia (Canberra), Canada (Ottawa), Mexico (Mexico City), Egypt (Cairo), Saudi Arabia (Riyadh), South Korea (Seoul). Island nations include Japan, UK, Philippines, Indonesia. Landlocked countries include Afghanistan, Bolivia, Switzerland. Countries vary vastly in development, government, culture, language, and religion.'
        },
        {
          title: 'Languages',
          content: 'Approximately 7,000 living languages spoken globally. Most spoken first languages: Mandarin Chinese (918 million native speakers, official language of China, tonal), Spanish (475 million, official in 20 countries), English (373 million native but 1.5 billion total including second language, global lingua franca), Hindi (344 million, India), Bengali (234 million), Portuguese (232 million, Portugal, Brazil), Russian (154 million), Japanese (125 million), French (77 million native but 275 million total), Arabic (300 plus million). Language families include Indo-European (largest, 3 billion speakers, includes English, Spanish, Hindi, Russian), Sino-Tibetan (Chinese languages), Niger-Congo (1,500 plus languages in Africa), Afro-Asiatic (Arabic, Hebrew), and Austronesian. Writing systems include Alphabets (Latin, Cyrillic), Abjads (Arabic, Hebrew), and Logographic (Chinese characters). 40% of languages at risk as endangered. Sign languages are complete languages. Translation is increasingly important with machine translation improving via AI.'
        },
        {
          title: 'World Religions',
          content: 'Major world religions: Christianity (2.4 billion, 31%, largest religion) believes in one God and Jesus Christ son of God. Branches include Catholicism (Pope, 1.3 billion), Protestantism, and Eastern Orthodoxy. Islam (1.9 billion, 24%, fastest growing) believes in one God (Allah) and Muhammad as final prophet. Five Pillars include declaration of faith, prayer 5 times daily, charity, fasting during Ramadan, and pilgrimage to Mecca. Hinduism (1.2 billion, 15%, oldest major religion 4000 plus years) has many gods and concepts of Karma, Dharma, and reincarnation. Buddhism (520 million, 7%) founded by Buddha teaches Four Noble Truths and Eightfold Path to end suffering and reach Nirvana. Sikhism (30 million) founded by Guru Nanak believes in one God and equality. Judaism (15 million) is oldest Abrahamic monotheistic religion with Torah as central text. About 16% identify as religiously unaffiliated. Religion influences politics, law, art, culture, conflict, and peace.'
        },
        {
          title: 'United Nations',
          content: 'United Nations founded October 24, 1945 after World War II to maintain peace and security. 193 member states. Headquarters in New York City. Six main organs: General Assembly (all 193 members discuss issues), Security Council (maintains peace, 5 permanent members with veto power USA, Russia, China, UK, France, plus 10 non-permanent), Economic and Social Council, Trusteeship Council, International Court of Justice (settles disputes between states, The Hague), and Secretariat (staff, led by Secretary-General). Specialized agencies include WHO (health), UNESCO (education, culture), UNICEF (children), UNHCR (refugees), World Bank, IMF. UN goals include peacekeeping, human rights (Universal Declaration 1948), development (Sustainable Development Goals), humanitarian aid, climate action, and disarmament. Challenges include permanent member vetoes blocking action, peacekeeping failures, bureaucracy, and funding. Despite limitations, UN provides forum for diplomacy and coordinates global responses.'
        }
      ]
    },
    {
      id: 'society',
      name: 'Society',
      icon: Users,
      color: 'bg-violet-500',
      topics: [
        {
          title: 'Democracy',
          content: 'Democracy is government by the people. Core principles include political equality (one person one vote), majority rule with minority rights protection, free and fair elections, rule of law, civil liberties, separation of powers, and checks and balances. Types include Direct democracy (citizens vote on laws directly) and Representative democracy (citizens elect representatives). Forms include Presidential (president head of state and government like USA), Parliamentary (parliament elects prime minister like UK, India, Canada), and Semi-presidential (both president and prime minister like France). History includes Ancient Athens direct democracy, Roman Republic, Magna Carta (1215), American Revolution (1776), French Revolution (1789), gradual expansion of suffrage. Now about half of countries are democratic. Challenges include voter apathy, polarization, misinformation, money in politics, and populism. Authoritarian alternatives include Monarchy, Dictatorship, Oligarchy, and Theocracy. Despite flaws, democracies tend toward peace, protect rights, and empower citizens.'
        },
        {
          title: 'Economics',
          content: 'Economics studies production, distribution, and consumption of goods and services. Economic systems: Capitalism features private ownership and free markets with prices determined by supply and demand. Examples include USA and Hong Kong. Advantages include efficiency, innovation, and economic growth. Disadvantages include inequality and market failures. Socialism features government ownership and central planning. Examples include Soviet Union, Cuba, North Korea. Mixed Economy combines market and government with regulation and social safety nets. Examples include most of Europe, Canada, Japan. Key concepts include Supply and Demand (equilibrium determines price), GDP (measures economic size and growth), Inflation (rising prices), Unemployment, Interest Rates (cost of borrowing), Fiscal Policy (government spending and taxation), Monetary Policy (central bank controls money supply), and International Trade. Economic indicators include stock markets, exchange rates, and balance of trade. Debates include role of government, taxation, regulation, welfare state, and automation impact.'
        },
        {
          title: 'Human Rights',
          content: 'Human rights are inherent inalienable rights all humans possess. Universal Declaration of Human Rights adopted by UN December 10, 1948 as response to WWII atrocities. 30 articles outline civil, political, economic, social, and cultural rights. Key articles include all born free and equal in dignity, right to life and liberty and security, no torture, no arbitrary arrest, freedom of movement, freedom of thought and conscience and religion, freedom of opinion and expression, right to participate in government, right to work and fair wages, adequate standard of living and healthcare, and right to education. International Covenants on Civil and Political Rights and Economic Social and Cultural Rights are legally binding. Regional systems include European Convention and American Convention. Other treaties cover torture, children rights (most ratified), women rights, racial discrimination, and disabilities. International Criminal Court prosecutes genocide, crimes against humanity, and war crimes. Violations include genocide, ethnic cleansing, torture, slavery, and discrimination. Organizations include UN Human Rights Council, Amnesty International, and Human Rights Watch. Progress includes abolition of slavery, decolonization, civil rights movements, women rights, and LGBTQ plus rights. Human rights are integral to human dignity, peace, and justice.'
        }
      ]
    }
  ];

  const filteredCategories = useMemo(() => {
    if (!searchQuery) return categories;
    
    const query = searchQuery.toLowerCase();
    return categories.map(cat => ({
      ...cat,
      topics: cat.topics.filter(topic => 
        topic.title.toLowerCase().includes(query) ||
        topic.content.toLowerCase().includes(query)
      )
    })).filter(cat => cat.topics.length > 0);
  }, [searchQuery]);

  const currentCategory = selectedCategory 
    ? filteredCategories.find(c => c.id === selectedCategory)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
              <Globe className="text-blue-500" size={36} />
              World Knowledge Encyclopedia
            </h1>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search topics across all categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {!selectedCategory ? (
          <div>
            <p className="text-slate-600 mb-6 text-lg">
              Explore comprehensive knowledge across {categories.length} major categories with detailed topics
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCategories.map(category => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-left group"
                  >
                    <div className={`${category.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">{category.name}</h2>
                    <p className="text-slate-600">{category.topics.length} detailed topics</p>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div>
            <button
              onClick={() => {
                setSelectedCategory(null);
              }}
              className="mb-6 text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
            >
              ← Back to Categories
            </button>

            {currentCategory && (
              <>
                <div className="flex items-center gap-4 mb-8">
                  {React.createElement(currentCategory.icon, {
                    className: "text-slate-700",
                    size: 48
                  })}
                  <div>
                    <h2 className="text-4xl font-bold text-slate-800">{currentCategory.name}</h2>
                    <p className="text-slate-600 mt-1">{currentCategory.topics.length} in-depth topics</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {currentCategory.topics.map((topic, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                    >
                      <h3 className="text-2xl font-bold text-slate-800 mb-4">{topic.title}</h3>
                      <p className="text-slate-700 leading-relaxed text-justify">{topic.content}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      <footer className="bg-white mt-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-slate-600">
          <p>World Knowledge Encyclopedia - Comprehensive learning across all major fields</p>
        </div>
      </footer>
    </div>
  );
};

export default KnowledgeApp;
