#include <stdlib.h>
#include <stdio.h>
#include <stdbool.h>
#include <string.h>
/*
?3. (5,0 pontos) Um professor está com dificuldades em gerenciar as notas de sua turma. Para
?tanto, precisa de um sistema para auxiliá-lo. Desenvolva um programa em Linguagem C
?considerando as seguintes características: (*UTILIZE STRUCTS)
?○ O programa deverá gerenciar os dados de, no máximo, 40 estudantes.
?○ Cada estudante possuirá nome completo, nota 1, nota 2, média final e situação
?(APROVADO OU REPROVADO).
?○ O professor realizará o cadastro dos alunos um a um, não sendo necessário cadastrar
todos ao mesmo tempo.
?○ O programa deverá apresentar o seguinte menu:
?1. Cadastrar um novo estudante.
?2. Listar todos os dados dos estudantes cadastrados.
?3. Buscar estudante por nome.
?4. Alterar notas de um estudante cadastrado (realiza a busca pelo nome do
?estudante).
?5. Listar estudantes aprovados.
?6. Listar estudantes reprovados.
?7. Apresentar dados do estudante com maior nota.
?8. Sair
*/

int main()
{
    typedef struct
    {
        char nome[100];
        int nota1, nota2, mediaFinal;
        bool situacao;
    } Aluno;
    Aluno aluno[41];
    int totalCadastrados = 0;

    bool initInterface(bool pass)
    {

        bool registerNewStudent(bool pass)
        {
            if (totalCadastrados >= 40)
            {
                printf("Você já cadastrou o limite de alunos!");
                initInterface(true);
                return false;
            }
            if (!pass)
            {
                int confirm;
                printf("\nDeseja mesmo cadastrar um novo estudante?\n\n-Pressione 0 para continuar\n-Pressione 1 para voltar\n");
                scanf("%i", &confirm);
                if (confirm == 1)
                {
                    initInterface(true);
                    return false;
                }
                else if (confirm != 0)
                {
                    printf("\nEntre com um item válido!\n");
                    registerNewStudent(false);
                    return false;
                }
            }
            int approved = NULL;
            printf("\n Insira o nome do aluno :");
            scanf("%s", &aluno[totalCadastrados].nome);
            printf("\n Insira a nota 1 do aluno : ");
            scanf("%i", &aluno[totalCadastrados].nota1);
            printf("\n Insira a nota 2 do aluno : ");
            scanf("%i", &aluno[totalCadastrados].nota2);
            printf("\n Insira a média do aluno : ");
            scanf("%i", &aluno[totalCadastrados].mediaFinal);
            printf("\n Pressione 0 se o aluno foi aprovado e 1 se foi reprovado : ");
            scanf("%i", &approved);
            if (approved == 0)
            {
                aluno[totalCadastrados].situacao = true;
            }
            else
            {
                aluno[totalCadastrados].situacao = false;
            }
            totalCadastrados = totalCadastrados + 1;
            int confirm = NULL;
            printf("\n\nDeseja cadastrar outro aluno?\n-Pressione 0 para cadastrar outro\n-Pressione 1 para voltar\n");
            scanf("%i", &confirm);
            if (confirm == 0)
            {
                registerNewStudent(true);
            }
            else
            {
                initInterface(true);
            }
        }

        void listAllStudents()
        {
            for (int i = 0; i < totalCadastrados; i++)
            {
                printf("\n\n\nALUNO: %i", i);
                printf("\nNome: %s", aluno[i].nome);
                printf("\nNota 1: %i", aluno[i].nota1);
                printf("\nNota 1: %i", aluno[i].nota2);
                printf("\nNota 1: %i", aluno[i].mediaFinal);
                if (aluno[i].situacao == true)
                {
                    printf("\nAprovado: SIM\n\n\n");
                }
                else
                {
                    printf("\nAprovado: NÃO\n\n\n");
                }
            }
            initInterface(true);
        }

        void searchByName()
        {
            char filterByName[100];
            printf("\n\nInsira o nome que deseja pesquisar: ");
            scanf("%s", &filterByName);
            for (int i = 0; i < totalCadastrados; i++)
            {
                if (strcmp(aluno[i].nome, filterByName) == 0)
                {
                    printf("\n\n\nALUNO: %i", i);
                    printf("\nNome: %s", aluno[i].nome);
                    printf("\nNota 1: %i", aluno[i].nota1);
                    printf("\nNota 1: %i", aluno[i].nota2);
                    printf("\nNota 1: %i", aluno[i].mediaFinal);
                    if (aluno[i].situacao == true)
                    {
                        printf("\nAprovado: SIM\n\n\n");
                    }
                    else
                    {
                        printf("\nAprovado: NÃO\n\n\n");
                    }
                }
            }
            initInterface(true);
        }

        void searchByNameAndUpdate()
        {
            char filterByName[100];
            printf("\n\nInsira o nome que deseja pesquisar: ");
            scanf("%s", &filterByName);
            for (int i = 0; i < totalCadastrados; i++)
            {
                if (strcmp(aluno[i].nome, filterByName) == 0)
                {
                    printf("\n\n\nALUNO: %i", i);
                    printf("\nNome: %s", aluno[i].nome);
                    printf("\nNota 1: %i", aluno[i].nota1);
                    printf("\nNota 1: %i", aluno[i].nota2);
                    printf("\nNota 1: %i", aluno[i].mediaFinal);
                    if (aluno[i].situacao == true)
                    {
                        printf("\nAprovado: SIM\n\n\n");
                    }
                    else
                    {
                        printf("\nAprovado: NÃO\n\n\n");
                    }
                    printf("\n\n\n Insira a nota 1: de %s\n", aluno[i].nome);
                    scanf("%i", &aluno[i].nota1);
                    printf("\n\n\n Insira a nota 2: de %s\n", aluno[i].nome);
                    scanf("%i", &aluno[i].nota2);
                    printf("\n\n\n Insira a média: de %s\n", aluno[i].nome);
                    scanf("%i", &aluno[i].mediaFinal);
                }
            }
            initInterface(true);
        }

        void listApproved()
        {
            for (int i = 0; i < totalCadastrados; i++)
            {
                if (aluno[i].situacao == true)
                {
                    printf("\n\n\nALUNO: %i", i);
                    printf("\nNome: %s", aluno[i].nome);
                    printf("\nNota 1: %i", aluno[i].nota1);
                    printf("\nNota 1: %i", aluno[i].nota2);
                    printf("\nNota 1: %i", aluno[i].mediaFinal);
                    if (aluno[i].situacao == true)
                    {
                        printf("\nAprovado: SIM\n\n\n");
                    }
                    else
                    {
                        printf("\nAprovado: NÃO\n\n\n");
                    }
                }
            }
            initInterface(true);
        }

        void listRejected()
        {
            for (int i = 0; i < totalCadastrados; i++)
            {
                if (aluno[i].situacao == false)
                {
                    printf("\n\n\nALUNO: %i", i);
                    printf("\nNome: %s", aluno[i].nome);
                    printf("\nNota 1: %i", aluno[i].nota1);
                    printf("\nNota 1: %i", aluno[i].nota2);
                    printf("\nNota 1: %i", aluno[i].mediaFinal);
                    if (aluno[i].situacao == true)
                    {
                        printf("\nAprovado: SIM\n\n\n");
                    }
                    else
                    {
                        printf("\nAprovado: NÃO\n\n\n");
                    }
                }
            }
            initInterface(true);
        }

        void betterSubmit()
        {
            int betterNota = 0, betterNota2 = 0;
            for (int i = 0; i < totalCadastrados; i++)
            {
                if (aluno[i].nota1 > betterNota)
                {
                    betterNota = i;
                }
                if (aluno[i].nota2 > betterNota2)
                {
                    betterNota2 = i;
                }
            }
            printf("\n\n Melhor nota na prova 1: \n\n");
            printf("ALUNO: %i", betterNota);
            printf("\nNome: %s", aluno[betterNota].nome);
            printf("\nNota 1: %i", aluno[betterNota].nota1);
            printf("\nNota 1: %i", aluno[betterNota].nota2);
            printf("\nNota 1: %i", aluno[betterNota].mediaFinal);
            if (aluno[betterNota].situacao == true)
            {
                printf("\nAprovado: SIM\n\n\n");
            }
            else
            {
                printf("\nAprovado: NÃO\n\n\n");
            }
            printf("\n\n Melhor nota na prova 2: \n\n");
            printf("ALUNO: %i", betterNota2);
            printf("\nNome: %s", aluno[betterNota2].nome);
            printf("\nNota 1: %i", aluno[betterNota2].nota1);
            printf("\nNota 1: %i", aluno[betterNota2].nota2);
            printf("\nNota 1: %i", aluno[betterNota2].mediaFinal);
            if (aluno[betterNota2].situacao == true)
            {
                printf("\nAprovado: SIM\n\n\n");
            }
            else
            {
                printf("\nAprovado: NÃO\n\n\n");
            }
            initInterface(true);
        }

        int buttonPressed = NULL;
        if (!pass)
        {
            printf("Bem vindo ao cadastramento de alunos!");
        }
        printf("\n-Pressione 0 para Cadastrar um novo estudante");
        printf("\n-Pressione 1 para Listar todos os dados dos estudantes cadastrados");
        printf("\n-Pressione 2 para Buscar estudante por nome.");
        printf("\n-Pressione 3 para Alterar notas de um estudante cadastrado (realiza a busca pelo nome do estudante).");
        printf("\n-Pressione 4 para Listar estudantes aprovados");
        printf("\n-Pressione 5 para Listar estudantes reprovados.");
        printf("\n-Pressione 6 para Apresentar dados do estudante com maior nota");
        printf("\n-Pressione 7 para Sair\n\n");
        scanf("%i", &buttonPressed);
        if (buttonPressed == 0)
        {
            registerNewStudent(false);
        }
        else if (buttonPressed == 1)
        {
            listAllStudents();
        }
        else if (buttonPressed == 2)
        {
            searchByName();
        }
        else if (buttonPressed == 3)
        {
            searchByNameAndUpdate();
        }
        else if (buttonPressed == 4)
        {
            listApproved();
        }
        else if (buttonPressed == 5)
        {
            listRejected();
        }
        else if (buttonPressed == 6)
        {
            betterSubmit();
        }
        else if (buttonPressed == 7)
        {
            printf("\nObrigado por utilizar os nosso serviços!\n\n");
            exit(0);
        }
        else
        {
            initInterface(true);
        }
    }

    void app()
    {
        initInterface(false);
    }

    app();
    return 0;
}