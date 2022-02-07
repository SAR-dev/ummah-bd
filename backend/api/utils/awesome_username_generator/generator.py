import os
import random

def generate_username(num_results=1):
    directory_path = os.path.dirname(__file__)

    # read word lists
    with open(os.path.join(directory_path, 'data', 'nouns.txt'), 'r') as infile:
        nouns = infile.read().strip(' \n').split('\n')
    with open(os.path.join(directory_path, 'data', 'adjectives.txt'), 'r') as infile:
        adjectives = infile.read().strip(' \n').split('\n')

    # generate usernames
    for i in range(num_results):

        # construct username    
        word1 = random.choice(adjectives)
        word2 = random.choice(nouns)
        username = '{}-{}'.format(word1, word2)

        # success
        return username