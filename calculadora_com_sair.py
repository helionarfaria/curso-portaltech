def calc(num1, num2, tipo):

    tipo = "x"

    while (tipo != 0):

        if tipo == 0:
            print("Saindo...")
            break

        elif tipo == 1:
            float(num1 + num2)

        elif tipo == 2:
            float(num1 - num2)

        elif tipo == 3:
            float(num1 * num2)

        elif tipo == 4:
            float(num1 / num2)

        else:
            print(
                "Tipo de operação selecionado inválido, tente novamente selecionando 1, 2, 3 ou 4")

    return operacao


tipo = int(input("Para números fracionados, utilizar . (ponto) ao invés de vírgula.\nDigite o tipo de operação, sendo:\n1 para adição;\n2 para subtração;\n3 para multiplicação\n4 para divisão;\n0 para sair: "))
num1 = float(input("Digite um número: "))
num2 = float(input("Digite outro número: "))
operacao = calc(num1, num2, tipo)
print(operacao)

# commitando novamente para consertar o anterior que foi junto com a aula 10
