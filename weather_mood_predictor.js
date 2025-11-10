const weatherMoodMap = {
    sunny: [
        "energetic", "joyful", "adventurous", "optimistic", "playful",
        "radiant", "inspired", "sociable", "confident", "carefree",
        "vibrant", "motivated", "excited", "blissful", "enthusiastic",
        "liberated", "cheerful", "upbeat", "sunny", "exuberant"
    ],
    rainy: [
        "cozy", "thoughtful", "creative", "melancholic", "reflective",
        "nostalgic", "dreamy", "pensive", "calm", "introspective",
        "romantic", "serene", "contemplative", "mellow", "meditative",
        "sentimental", "philosophical", "imaginative", "tranquil", "wistful"
    ],
    cloudy: [
        "focused", "calm", "peaceful", "restless", "balanced",
        "neutral", "contemplative", "steady", "grounded", "patient",
        "observant", "mindful", "composed", "reserved", "thoughtful",
        "measured", "even-keeled", "subdued", "collected", "centered"
    ],
    stormy: [
        "introspective", "creative", "focused", "calm", "intense",
        "passionate", "dramatic", "powerful", "awed", "humbled",
        "cathartic", "transformative", "renewed", "purified", "vigilant",
        "respectful", "humbled", "rebellious", "fervent", "resolute"
    ],
    snowy: [
        "cozy", "peaceful", "joyful", "adventurous", "magical",
        "childlike", "wonder-filled", "serene", "hopeful", "renewed",
        "pure", "quiet", "still", "blessed", "festive",
        "enchanted", "pristine", "hushed", "grateful", "awestruck"
    ],
    windy: [
        "energetic", "free-spirited", "unpredictable", "changeable", "invigorated",
        "spontaneous", "whimsical", "unburdened", "refreshed", "dynamic",
        "unrestrained", "liberated", "airy", "light", "breezy",
        "scattered", "restless", "animated", "stirred", "awakened"
    ],
    foggy: [
        "mysterious", "contemplative", "uncertain", "dreamy", "introspective",
        "veiled", "hidden", "secretive", "puzzled", "searching",
        "ambiguous", "enigmatic", "obscure", "hazy", "uncertain",
        "suspended", "liminal", "transitional", "uncertain", "expectant"
    ],
    hot: [
        "languid", "relaxed", "slow-paced", "sun-drenched", "lethargic",
        "indolent", "siesta-like", "drowsy", "mellow", "heated",
        "passionate", "fiery", "intense", "sultry", "slow-burning",
        "torpid", "listless", "sun-soaked", "heavy", "slow-moving"
    ],
    cold: [
        "crisp", "alert", "refreshed", "sharp", "invigorated",
        "clear-headed", "brisk", "awake", "stimulated", "tingling",
        "shivery", "bracing", "frosty", "numb", "isolated",
        "withdrawn", "hibernating", "preserved", "still", "waiting"
    ],
    humid: [
        "heavy", "slow", "oppressed", "sticky", "weighed-down",
        "muggy", "sultry", "steamy", "tropical", "languorous",
        "sweaty", "uncomfortable", "patient", "enduring", "resigned",
        "slow-moving", "thick", "dense", "saturated", "immersed"
    ]
};

const weatherActivities = {
    sunny: [
        "perfect for a beach day and swimming",
        "excellent for hiking and nature walks",
        "ideal for outdoor picnics in the park",
        "wonderful for gardening and outdoor projects",
        "great for cycling and outdoor sports",
        "perfect for reading in the backyard",
        "excellent for photography and sightseeing",
        "ideal for outdoor yoga or exercise",
        "wonderful for visiting farmers markets",
        "great for washing your car or cleaning windows"
    ],
    rainy: [
        "perfect for cozy reading with hot tea",
        "excellent for baking cookies or bread",
        "ideal for indoor board games with family",
        "wonderful for movie marathons with snacks",
        "great for organizing and decluttering spaces",
        "perfect for journaling and self-reflection",
        "excellent for trying new recipes in the kitchen",
        "ideal for indoor crafts and DIY projects",
        "wonderful for catching up on podcasts",
        "great for online learning and skill development"
    ],
    cloudy: [
        "perfect for museum or gallery visits",
        "excellent for shopping and exploring malls",
        "ideal for coffee shop hopping with friends",
        "wonderful for photography without harsh light",
        "great for visiting indoor attractions",
        "perfect for library visits and research",
        "excellent for planning future trips",
        "ideal for indoor rock climbing or bowling",
        "wonderful for cooking classes or workshops",
        "great for home organization projects"
    ],
    stormy: [
        "perfect for home improvement projects",
        "excellent for cooking elaborate meals",
        "ideal for journaling and creative writing",
        "wonderful for online courses and learning",
        "great for organizing digital files and photos",
        "perfect for meditation and mindfulness practice",
        "excellent for planning your goals and dreams",
        "ideal for deep cleaning and reorganizing",
        "wonderful for virtual social gatherings",
        "great for learning musical instruments indoors"
    ],
    snowy: [
        "perfect for building snowmen and snow forts",
        "excellent for making hot chocolate by the fire",
        "ideal for winter crafts and knitting projects",
        "wonderful for skiing or snowboarding adventures",
        "great for baking holiday treats and cookies",
        "perfect for reading winter-themed books",
        "excellent for organizing photo albums",
        "ideal for winter photography sessions",
        "wonderful for making soups and stews",
        "great for planning spring garden layouts"
    ],
    windy: [
        "perfect for flying kites in open fields",
        "excellent for beach combing and shell collecting",
        "ideal for wind-based photography projects",
        "wonderful for sailing or windsurfing adventures",
        "great for drying laundry naturally outdoors",
        "perfect for listening to music that matches the mood",
        "excellent for cleaning outdoor spaces",
        "ideal for visiting windmills or turbines",
        "wonderful for dramatic outdoor photography",
        "great for organizing outdoor storage areas"
    ],
    foggy: [
        "perfect for mysterious photography sessions",
        "excellent for writing poetry or short stories",
        "ideal for visiting historic or haunted locations",
        "wonderful for introspection and deep thinking",
        "great for watching mystery or thriller movies",
        "perfect for exploring familiar places anew",
        "excellent for practicing mindfulness meditation",
        "ideal for planning future creative projects",
        "wonderful for listening to atmospheric music",
        "great for studying maps and planning adventures"
    ],
    hot: [
        "perfect for swimming and water activities",
        "excellent for visiting air-conditioned museums",
        "ideal for making frozen treats and smoothies",
        "wonderful for early morning or evening walks",
        "great for setting up sprinklers for fun",
        "perfect for reading in shaded hammocks",
        "excellent for indoor movie theaters",
        "ideal for visiting public pools or water parks",
        "wonderful for making summer salads",
        "great for stargazing on clear nights"
    ],
    cold: [
        "perfect for making hearty soups and stews",
        "excellent for visiting warm indoor cafes",
        "ideal for bundling up for winter walks",
        "wonderful for hot chocolate tasting sessions",
        "great for visiting indoor botanical gardens",
        "perfect for learning to knit or crochet",
        "excellent for board game tournaments indoors",
        "ideal for visiting local libraries",
        "wonderful for planning summer vacations",
        "great for indoor exercise and yoga sessions"
    ],
    humid: [
        "perfect for visiting air-conditioned malls",
        "excellent for swimming and water sports",
        "ideal for making refreshing summer drinks",
        "wonderful for visiting indoor ice rinks",
        "great for organizing and cleaning indoors",
        "perfect for reading in cool basements",
        "excellent for visiting movie theaters",
        "ideal for cold food preparation",
        "wonderful for indoor plant care",
        "great for planning dehumidifying projects"
    ]
};

// storing weatherMoodMap object keys in array for easy access
const weatherConditionsArr = Object.keys(weatherMoodMap);

// function to generate random weather, mood, and activity
function generateWeatherMoodActivity() {
    const weather = weatherConditionsArr[Math.floor(Math.random() * weatherConditionsArr.length)];
    const mood = weatherMoodMap[weather][Math.floor(Math.random() * weatherMoodMap[weather].length)];
    const activity = weatherActivities[weather][Math.floor(Math.random() * weatherActivities[weather].length)];

    return `On a ${weather} day, you might feel ${mood} and it's ${activity}.`;
}

console.log(generateWeatherMoodActivity());
