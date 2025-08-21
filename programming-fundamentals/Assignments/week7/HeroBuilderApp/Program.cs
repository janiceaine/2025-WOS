using System.ComponentModel;
using System.Runtime.Serialization;
using HeroBuilderApp.Classes;

var hero = new Hero("Ichigo", "Soul Reaper", 88, 45);

// Console.WriteLine(hero);

Console.WriteLine(
    $"{hero.Name} is a {hero.HeroType} with {hero.Health} health levels and {hero.AttackPower} attack power.\n"
);

hero.DisplayHeroInfo();
hero.TakeDamage(30);
hero.PerformAttack("Joker");
hero.TakeDamage(90);

var myHero = new Hero();
Console.WriteLine(
    $"{myHero.Name} is a {myHero.HeroType} with {myHero.Health} health levels and {myHero.AttackPower} attack power.\n"
);

var superHero = new Hero("Saitama", "Serious Puncher", 100, 80);
Console.WriteLine(
    $"{superHero.Name} is a {superHero.HeroType} with {superHero.Health} health levels and {superHero.AttackPower} attack power.\n"
);

hero.Heal(34);
hero.LevelUp(22);

while (superHero.IsAlive && hero.IsAlive)
{
    superHero.PerformAttack(hero.Name ?? "");
    hero.TakeDamage(20);

    if (!hero.IsAlive)
        break;

    hero.PerformAttack(superHero.Name ?? "");
    superHero.TakeDamage(20);

    if (!hero.IsAlive)
        break;

    Console.WriteLine();
    System.Threading.Thread.Sleep(1000);
}

if (superHero.IsAlive)
{
    Console.WriteLine($"{superHero.Name} wins the battle! 🏆\n");
}
else
{
    Console.WriteLine($"{hero.Name} wins the battle! 💪🏾\n");
}
