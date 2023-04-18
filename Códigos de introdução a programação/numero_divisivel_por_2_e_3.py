def numerodiv2ou3():

    numero_valido = False

    while (numero_valido == False):
        try:
            numero = int(input('Insira um número para saber se ele é divisivel por 2 e 3: '))
            numero_div_2 = int(numero / 2)
            numero_div_3 = int(numero / 3)

            if (numero > 0 and numero % 2 == 0 and numero % 3 == 0):    
                print('O número escolhido', numero, 'é divisivel por 2 e 3 e os resultados são: ', numero_div_2, 'e', numero_div_3)
                numero_valido = True

            elif (numero < 0):
                print('O número não pode ser negativo.')

            else:
                print('O número escolhido não é divisivel por 2 e 3.')
                
        except:
            print('O número deve ser positivo e inteiro.')


numerodiv2ou3()