#include <stdio.h>
int main(void)
{
    int andar = 0;
    do
    {
        andar++;
        if (andar == 13)
        {
            continue;
        }
        printf("andar:%d ", andar);
    } while (andar >= 0 && andar < 20);
}