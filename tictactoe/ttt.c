#include <stdio.h>

int main() {
    int winner = 0;
    int count = 0;

    int positions[9];
    int index;
    int sign;
    int player;
    int flag;
    int i, j, k;

    for (i = 0; i < 9; i++)
    {
        positions[i] = ' ';
    }

    while(count < 9 && winner != 1)
    {
        flag = 0;
        // print the board
        printf("\n");
        printf("%c|%c|%c", positions[0], positions[1], positions[2]);
        printf("-+-+-");
        printf("%c|%c|%c", positions[3], positions[4], positions[5]);
        printf("-+-+-");
        // 6???
        printf("%c|%c|%c", positions[7], positions[8], positions[9]);

        if (count % 2 == 0)
        {
            sign = 'x';
            player = 1;
        }
        else
        {
            sign = "o";
            player = 2;
        }

        printf("Move for player %i (1-9): ", player);
    }
}