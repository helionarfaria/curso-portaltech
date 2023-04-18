def mostrarNumero():
    numero_valido = False

    while (numero_valido == False):
        try:
            numero = int(input('Digite um numero de 0 a 100'))

            if (numero >= 0 and numero <= 100):
                print('Parabéns, você escolheu um numero valido: ', numero)
                numero_valido = True

            elif  (numero < 0):
                print('O número precisa ser positivo')
            
            else:
                print('Você precisa escolher um número de 0 a 100')
        except:
            print('Você precisa digitar um número positivo e inteiro')

mostrarNumero()