def calc(num1, num2, tipo):
    
    tipo = int(input("Para números fracionados, utilizar . (ponto) ao invés de vírgula.\nDigite o tipo de operação, sendo:\n1 para adição;\n2 para subtração;\n3 para multiplicação\n4 para divisão: "))
    num1 = float(input("Digite um número: "))
    num2 = float(input("Digite outro número: "))
    soma = num1 + num2
    subtracao = num1 - num2
    multiplica = num1 * num2
    divide = num1 / num2
    numero_invalido = 0

    if tipo == 1:
      operacao = soma

    elif tipo == 2:
      operacao = subtracao

    elif tipo == 3:
      operacao = multiplica

    elif tipo == 4:
      operacao = divide

    else:
      operacao = numero_invalido

    return operacao
    
resultado = calc(0, 0, 0)

print(resultado)