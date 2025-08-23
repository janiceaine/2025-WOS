using HeroBuilder.Classes;

var warrior = new Warrior("Rurouni Kenshin", "Samurai", 65, 150, "Reverse-blade katana");

var mage = new Mage("Dumbledoore", "Wizard", 80, 100, "Firestorm");

var heroes = new List<Hero> { warrior, mage };

foreach (Hero hero in heroes)
{
    hero.DisplayHeroInfo();
    hero.PerformSpecialAbility();
}

// warrior.DisplayHeroInfo();

// warrior.PerformSpecialAbility();

warrior.TakeDamage(48);

// mage.DisplayHeroInfo();

// mage.PerformSpecialAbility();

mage.TakeDamage(55);
