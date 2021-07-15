import java.util.Scanner;

public class Ex4 {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("Insira seu saldo");
        Carteira carteira1 = new Carteira(s.nextDouble());
        System.out.println("Insira o Valor que Deseja Pagar");
        carteira1.podePagar(s.nextDouble());

        System.out.println("Carteira 2");
        Carteira carteira2 = new Carteira(4500);
        carteira2.podePagar(5000);
    }
}
