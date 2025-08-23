namespace HeroBuilder.Classes;

public class Warrior : Hero
{
    public string WeaponType { get; set; }

    public Warrior(string name, string heroType, int health, int attackPower, string weaponType)
        : base(name, heroType, health, attackPower)
    {
        WeaponType = weaponType;
    }

    public override void PerformSpecialAbility()
    {
        Console.WriteLine($"{Name} draws their {WeaponType} in a mighty swoope!\n");
    }

    public override void DisplayHeroInfo()
    {
        Console.WriteLine(
            $"Name: {Name} \nHeroType: {HeroType} \nHealth: {Health} \nAttack Power: {AttackPower} \nWeapon Type: {WeaponType}\n"
        );
    }

    public override void PerformAttack(string target)
    {
        Console.WriteLine(
            $"{Name} charges at {target} with their {WeaponType} for {AttackPower} damage!"
        );
    }
}
