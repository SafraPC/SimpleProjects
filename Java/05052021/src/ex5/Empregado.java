import java.util.Scanner;

public class Empregado {
    String nome;
    String segundoNome;
    double salario = 0.0;

    Scanner scanner = new Scanner(System.in);

    public Empregado() {
        System.out.println("Insira o seu Nome :");
        nome = scanner.next();
        System.out.println("Insira o seu Segundo nome :");
        segundoNome = scanner.next();
        System.out.println("Insira o seu Salário :");
        salario = scanner.nextDouble();
        if (salario < 0)
            salario = 0;
    }

    public void aumentaSalario() {
        double salarioAux;
        salarioAux = salario * 0.1;
        salario = salario + salarioAux;
        System.out.println("O salário de : " + nome + " Aumentou!");
    }

    public void mostraSalarioAnual() {
        System.out.println("O salário Anual atual de : " + nome + " é de : " + salario * 12);
    }

}
