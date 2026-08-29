export type CategoryId =
  | "all"
  | "food"
  | "beauty"
  | "culture"
  | "craft"
  | "sport"
  | "shop"
  | "bars"
  | "leisure"
  | "nature"

export type ColorTemp = "all" | "warm" | "cool" | "pastel" | "dark"
export type NameLength = "any" | "short" | "medium" | "long"
export type NameLang = "any" | "latin" | "cyrillic"

export const CATEGORIES: { id: CategoryId; label: string; icon: string }[] = [
  { id: "all", label: "Все", icon: "Sparkles" },
  { id: "food", label: "Еда", icon: "Utensils" },
  { id: "beauty", label: "Красота", icon: "Flower2" },
  { id: "culture", label: "Культура", icon: "Landmark" },
  { id: "craft", label: "Ремесло", icon: "Hammer" },
  { id: "sport", label: "Спорт", icon: "Dumbbell" },
  { id: "shop", label: "Магазин", icon: "ShoppingBag" },
  { id: "bars", label: "Бары", icon: "Wine" },
  { id: "leisure", label: "Отдых", icon: "Palmtree" },
  { id: "nature", label: "Природа", icon: "Leaf" },
]

export const COLOR_FILTERS: { id: ColorTemp; label: string }[] = [
  { id: "all", label: "Все" },
  { id: "warm", label: "Теплые" },
  { id: "cool", label: "Холодные" },
  { id: "pastel", label: "Пастель" },
  { id: "dark", label: "Темные" },
]

export const NAME_LENGTHS: { id: NameLength; label: string }[] = [
  { id: "any", label: "Любая" },
  { id: "short", label: "Короткое" },
  { id: "medium", label: "Среднее" },
  { id: "long", label: "Длинное" },
]

export const NAME_LANGS: { id: NameLang; label: string }[] = [
  { id: "any", label: "Любой" },
  { id: "latin", label: "Latin" },
  { id: "cyrillic", label: "Кириллица" },
]

export const NICHES: { text: string; category: CategoryId }[] = [
  // Еда
  { text: "Кофейня навынос", category: "food" },
  { text: "Пекарня на закваске", category: "food" },
  { text: "Веган-бистро", category: "food" },
  { text: "Лавка специй", category: "food" },
  { text: "Уличная лапшичная", category: "food" },
  { text: "Сыроварня", category: "food" },
  // Красота
  { text: "Барбершоп", category: "beauty" },
  { text: "Студия маникюра", category: "beauty" },
  { text: "Бренд органической косметики", category: "beauty" },
  { text: "Салон бровей", category: "beauty" },
  { text: "Парфюмерная лаборатория", category: "beauty" },
  // Культура
  { text: "Независимая галерея", category: "culture" },
  { text: "Книжный клуб", category: "culture" },
  { text: "Киноархив", category: "culture" },
  { text: "Джаз-площадка", category: "culture" },
  { text: "Театральная студия", category: "culture" },
  // Ремесло
  { text: "Керамическая мастерская", category: "craft" },
  { text: "Столярная мануфактура", category: "craft" },
  { text: "Ювелирная студия", category: "craft" },
  { text: "Мастерская кожи", category: "craft" },
  { text: "Стеклодувная студия", category: "craft" },
  // Спорт
  { text: "Кроссфит-зал", category: "sport" },
  { text: "Йога-студия", category: "sport" },
  { text: "Скейт-школа", category: "sport" },
  { text: "Клуб бегунов", category: "sport" },
  { text: "Веломастерская", category: "sport" },
  // Магазин
  { text: "Концепт-стор одежды", category: "shop" },
  { text: "Магазин виниловых пластинок", category: "shop" },
  { text: "Лавка растений", category: "shop" },
  { text: "Магазин канцелярии", category: "shop" },
  { text: "Секонд-хенд премиум", category: "shop" },
  // Бары
  { text: "Крафтовая пивоварня", category: "bars" },
  { text: "Винный бар", category: "bars" },
  { text: "Коктейль-спикизи", category: "bars" },
  { text: "Сидрерия", category: "bars" },
  { text: "Чайная церемония", category: "bars" },
  // Отдых
  { text: "Городской спа", category: "leisure" },
  { text: "Бутик-отель", category: "leisure" },
  { text: "Сауна и купель", category: "leisure" },
  { text: "Коворкинг с кафе", category: "leisure" },
  { text: "Кемпинг у озера", category: "leisure" },
  // Природа
  { text: "Экоферма", category: "nature" },
  { text: "Питомник растений", category: "nature" },
  { text: "Бренд полевых трав", category: "nature" },
  { text: "Пасека", category: "nature" },
  { text: "Заповедник и экотропы", category: "nature" },
]

export const MOODS: string[] = [
  "Меланхолия",
  "Тихая роскошь",
  "Дерзкий панк",
  "Ностальгия 90-х",
  "Минимализм дзен",
  "Тёплый уют",
  "Космический футуризм",
  "Ретро-винтаж",
  "Игривый поп",
  "Строгий гротеск",
  "Природная органика",
  "Индустриальный брутализм",
  "Мечтательный сюрреализм",
  "Праздничный карнавал",
  "Северная сдержанность",
  "Южная страсть",
  "Романтичная нежность",
  "Технологичный неон",
  "Аналоговое тепло",
  "Загадочный нуар",
]

export const NAMES: { text: string; length: NameLength; lang: NameLang }[] = [
  // Latin — короткое
  { text: "WOLD", length: "short", lang: "latin" },
  { text: "NOVA", length: "short", lang: "latin" },
  { text: "KIN", length: "short", lang: "latin" },
  { text: "LUME", length: "short", lang: "latin" },
  { text: "VOX", length: "short", lang: "latin" },
  { text: "FERN", length: "short", lang: "latin" },
  { text: "ODE", length: "short", lang: "latin" },
  { text: "RUNE", length: "short", lang: "latin" },
  { text: "MOSS", length: "short", lang: "latin" },
  { text: "ARC", length: "short", lang: "latin" },
  // Latin — среднее
  { text: "LUMINA", length: "medium", lang: "latin" },
  { text: "VERANO", length: "medium", lang: "latin" },
  { text: "KINFOLK", length: "medium", lang: "latin" },
  { text: "ORBITA", length: "medium", lang: "latin" },
  { text: "MARBLE", length: "medium", lang: "latin" },
  { text: "SOLARIS", length: "medium", lang: "latin" },
  { text: "VELVET", length: "medium", lang: "latin" },
  { text: "HARBOR", length: "medium", lang: "latin" },
  // Latin — длинное
  { text: "MERIDIAN", length: "long", lang: "latin" },
  { text: "EVERGREEN", length: "long", lang: "latin" },
  { text: "NORTHWIND", length: "long", lang: "latin" },
  { text: "PORCELAIN", length: "long", lang: "latin" },
  { text: "CONSTELLA", length: "long", lang: "latin" },
  // Кириллица — короткое
  { text: "ВОЛК", length: "short", lang: "cyrillic" },
  { text: "МЁД", length: "short", lang: "cyrillic" },
  { text: "ЛЕС", length: "short", lang: "cyrillic" },
  { text: "ДОМ", length: "short", lang: "cyrillic" },
  { text: "ЯР", length: "short", lang: "cyrillic" },
  { text: "СОК", length: "short", lang: "cyrillic" },
  // Кириллица — среднее
  { text: "ВОРОН", length: "medium", lang: "cyrillic" },
  { text: "ЯГОДА", length: "medium", lang: "cyrillic" },
  { text: "КОРЕНЬ", length: "medium", lang: "cyrillic" },
  { text: "ПОЛЁТ", length: "medium", lang: "cyrillic" },
  { text: "ГРАНАТ", length: "medium", lang: "cyrillic" },
  { text: "ОБЛАКО", length: "medium", lang: "cyrillic" },
  // Кириллица — длинное
  { text: "СОЗВЕЗДИЕ", length: "long", lang: "cyrillic" },
  { text: "ПЕРВОЦВЕТ", length: "long", lang: "cyrillic" },
  { text: "ПОСЛЕВКУС", length: "long", lang: "cyrillic" },
  { text: "РАЗНОТРАВЬЕ", length: "long", lang: "cyrillic" },
]

export const PALETTES: { colors: string[]; temp: Exclude<ColorTemp, "all"> }[] = [
  // Теплые
  { colors: ["#F4A261", "#E76F51", "#E9C46A", "#F1DEC9", "#8B3A2B"], temp: "warm" },
  { colors: ["#FFB703", "#FB8500", "#FFD29D", "#C1121F", "#780000"], temp: "warm" },
  { colors: ["#E07A5F", "#F2CC8F", "#F4F1DE", "#D62828", "#9C3D2E"], temp: "warm" },
  { colors: ["#FFE8D6", "#DDBEA9", "#CB997E", "#B98B73", "#6B705C"], temp: "warm" },
  // Холодные
  { colors: ["#264653", "#2A9D8F", "#8AB6C4", "#E0FBFC", "#3D5A80"], temp: "cool" },
  { colors: ["#03045E", "#0077B6", "#00B4D8", "#90E0EF", "#CAF0F8"], temp: "cool" },
  { colors: ["#1B4332", "#2D6A4F", "#40916C", "#74C69D", "#D8F3DC"], temp: "cool" },
  { colors: ["#22223B", "#4A4E69", "#9A8C98", "#C9ADA7", "#F2E9E4"], temp: "cool" },
  // Пастель
  { colors: ["#FFCDB2", "#FFB4A2", "#E5989B", "#B5838D", "#F7EDE2"], temp: "pastel" },
  { colors: ["#CDB4DB", "#FFC8DD", "#FFAFCC", "#BDE0FE", "#A2D2FF"], temp: "pastel" },
  { colors: ["#F1FAEE", "#A8DADC", "#E9F5DB", "#FEFAE0", "#FAEDCD"], temp: "pastel" },
  { colors: ["#EAE4E9", "#FFF1E6", "#FDE2E4", "#DFE7FD", "#E2ECE9"], temp: "pastel" },
  // Темные
  { colors: ["#0B090A", "#161A1D", "#660708", "#A4161A", "#F5F3F4"], temp: "dark" },
  { colors: ["#10002B", "#240046", "#3C096C", "#5A189A", "#E0AAFF"], temp: "dark" },
  { colors: ["#1A1A2E", "#16213E", "#0F3460", "#533483", "#E94560"], temp: "dark" },
  { colors: ["#22333B", "#0A0908", "#5E503F", "#C6AC8F", "#EAE0D5"], temp: "dark" },
]
