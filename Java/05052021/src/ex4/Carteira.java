public class Carteira {
    double saldo;

    public Carteira(double saldo) {
        if (saldo < 0) {
            this.saldo = 0;
        } else {
            this.saldo = saldo;
        }

    }

    public boolean podePagar(double preco) {
        if (preco < saldo) {
            System.out.println("Limite OK ! saldo anterior : " + saldo + " Valor pago: " + preco);
            saldo = saldo - preco;
            System.out.println("Saldo atual : " + saldo);
            return true;
        } else {
            System.out.println("Transação Indisponível!");
            System.out.println("Saldo atual : " + saldo + " , Valor que iria ser pago : " + preco);
            return false;
        }
    }
}
