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

    for (i = 0; i < 9; ++)
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
        printf("%c|%c|%c", positions[6], positions[7], positions[8]);
    }
}