#include <stdio.h>
int main(void)
{
    int andar = 21;
    do
    {
        andar--;
        if (andar == 13)
        {
            continue;
        }
        printf("andar:%d ", andar);
    } while (andar > 1 && andar <= 21);
}