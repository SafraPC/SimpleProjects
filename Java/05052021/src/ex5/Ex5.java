
public class Ex5 {

    public static void main(String[] args) {
        // Definição do Scanner
        Empregado empregado1 = new Empregado();
        System.out.println("Cadastrando o Segundo Empregado");
        Empregado empregado2 = new Empregado();

        empregado1.mostraSalarioAnual();
        empregado1.aumentaSalario();
        empregado1.mostraSalarioAnual();

        empregado2.mostraSalarioAnual();
        empregado2.aumentaSalario();
        empregado2.mostraSalarioAnual();

    }
}
