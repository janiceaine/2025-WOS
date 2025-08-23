namespace HeroBuilder.Classes;

public class Mage : Hero
{
    public string SpellType { get; set; }

    public Mage(string name, string heroType, int health, int attackPower, string spellType)
        : base(name, heroType, health, attackPower)
    {
        SpellType = spellType;
    }

    public override void PerformSpecialAbility()
    {
        Console.WriteLine($"{Name} casts a powerful {SpellType}!\n");
    }

    public override void DisplayHeroInfo()
    {
        Console.WriteLine(
            $"Name: {Name} \nHeroType: {HeroType} \nHealth: {Health} \nAttack Power: {AttackPower} \nSpell Type: {SpellType}\n"
        );
    }

    public override void PerformAttack(string target)
    {
        Console.WriteLine(
            $"{Name} charges at {target} with their {SpellType} for {AttackPower} damage!"
        );
    }
}
