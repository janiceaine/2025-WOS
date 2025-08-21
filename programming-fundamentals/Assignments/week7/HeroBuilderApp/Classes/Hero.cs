namespace HeroBuilderApp.Classes;

public class Hero
{
    public string? Name { get; set; }

    public string? HeroType { get; set; }

    private int _health;
    public int Health
    {
        get { return _health; }
        set
        {
            if (value > 0 && value <= 100)
            {
                _health = value;
            }
            else
            {
                Console.WriteLine("Invalid Health levels.\n");
                _health = 0;
            }
        }
    }

    private int _attackPower;

    public int AttackPower
    {
        get { return _attackPower; }
        set
        {
            if (value > 0)
            {
                _attackPower = value;
            }
            else
            {
                Console.WriteLine("Attack power cannot be less than 1.\n");
                _attackPower = 1;
            }
        }
    }

    public Hero(string name, string heroType, int health, int attackPower)
    {
        Name = name;
        HeroType = heroType;
        Health = health;
        AttackPower = attackPower;
    }

    public Hero()
    {
        Name = "Unknown Hero";
        HeroType = "Adventurer";
        Health = 75;
        AttackPower = 10;
    }

    public void DisplayHeroInfo()
    {
        Console.WriteLine(
            $"Name: {Name} \nHeroType: {HeroType} \nHealth: {Health} \nAttack Power: {AttackPower}\n"
        );
    }

    public void TakeDamage(int damageAmount)
    {
        var remainingHealth = Health - damageAmount;
        Health = remainingHealth;
        if (!IsAlive)
        {
            Console.WriteLine($"{Name} has been defeated.\n");
        }
        else
        {
            Console.WriteLine($"{Name} took {damageAmount} damage. Health: {remainingHealth}\n");
        }
    }

    public void PerformAttack(string target)
    {
        Console.WriteLine($"{Name} the {HeroType} attacks {target} with {AttackPower} damage!\n");
    }

    public bool IsAlive
    {
        get
        {
            if (Health > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }

    public void Heal(int healAmount)
    {
        var prevHealth = Health;
        Health += healAmount;
        if (Health > 100)
        {
            Health = 100;
        }
        Console.WriteLine(
            $"{Name} health levels increased by {Health - prevHealth} and now has: {Health} health levels.\n"
        );
    }

    public void LevelUp(int attackBoost)
    {
        AttackPower += attackBoost;
        Console.WriteLine(
            $"{Name} has gained {attackBoost} attck boost levels and now has {AttackPower} attack power.\n"
        );
    }
}
