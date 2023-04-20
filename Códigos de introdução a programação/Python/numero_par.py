def numeropar():

    numero_par = False

    while(numero_par == False):
        try:
            numero = int(input('Insira um número par'))

            if (numero > 0 and numero % 2 == 0):
                print('Parabéns, você escolheu um número par.')
                numero_par = True
            elif (numero < 0):
                print('O número não pode ser negativo')
            else:
                print('Você escolheu um número ímpar, tente novamente.')
        except:
            print('O número deve ser par, positivo e inteiro')
            
numeropar()