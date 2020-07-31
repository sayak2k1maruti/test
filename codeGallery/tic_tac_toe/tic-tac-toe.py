import random
posOfVL = [6,12]
posOfHL = [3,6]
matePos = []
blankPos = []
posOfCross = []
posOfCircle = []

demoPos = [[3,2],[9,2],[15,2],[3,5],[9,5],[15,5],[3,8],[9,8],[15,8]]
winingPos = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]

def fun():
	
	for i in range(0,1000):
		blankPage()
		print("\t\t\t                    #")
		print("\t\t\t              ############")
		print("\t\t\t            ################")
		print("\t\t\t         ######################")
		print("\t\t\t       ##########################")
		print("\t\t\t     #############################")
		print("\t\t\t    ###############################")
		print("\t\t\t   ################################")
		print("\t\t\t   ################################")
		print("\t\t\t   ################################")
		print("\t\t\t    ##############################")
		print("\t\t\t     ############################")
		print("\t\t\t       ########################")
		print("\t\t\t         ####################")
		print("\t\t\t              #########")
		print("\t\t\t                   #")
def blankPage():
	for i in range(0,25):
		print("\n")
def space():
	for i in range(0,8):
		print("\n")

def drawBoard():
	print("\n\n\n",end = "")
	for i in range(1,10):
		print("\t\t\t",end = "")
		for j in range(1,18):
			posOfCursor = [j,i]
			if posOfCursor in matePos:
				print("W",end = "")
			elif posOfCursor in blankPos:
				print(" ",end = "")
			elif posOfCursor in posOfCross:
				print("X",end = "")
			elif posOfCursor in posOfCircle:
				print("@",end = "")
			elif posOfCursor in demoPos:
				demo = int((((j/3)-1)/2 + 1) + (((i-2)/3)*3))
				print(demo,end = "")
			elif i in posOfHL:
				if j in posOfVL:
					print("|",end = "")
				else:
					print("_",end = "")
			else:
				if j in posOfVL:
					print("|",end = "")
				else:
					print(" ",end = "")
		print("\n",end = "")

	print("\n\n\n",end = "")


def putCross(position):
	i = 0
	j = 0
	if position%3 == 0:
		i = 15
	elif position % 3 == 1:
		i = 3
	else :
		i = 9
	if position in range(1,4):
		j = 2
	elif position in range(4,7):
		j = 5
	else:
		j = 8
	posOfCross.append([i,j])

def putCircle(position):
	i = 0
	j = 0
	if position%3 == 0:
		i = 15
	elif position % 3 == 1:
		i = 3
	else :
		i = 9
	if position in range(1,4):
		j = 2
	elif position in range(4,7):
		j = 5
	else:
		j = 8
	posOfCircle.append([i,j])

def addMatePos(position):
	i = 0
	j = 0
	if position%3 == 0:
		i = 15
	elif position % 3 == 1:
		i = 3
	else :
		i = 9
	if position in range(1,4):
		j = 2
	elif position in range(4,7):
		j = 5
	else:
		j = 8
	matePos.append([i,j])


def blankTable():
	for position in range(1,10):
		i = 0
		j = 0
		if position%3 == 0:
			i = 15
		elif position % 3 == 1:
			i = 3
		else :
			i = 9
		if position in range(1,4):
			j = 2
		elif position in range(4,7):
			j = 5
		else:
			j = 8
		blankPos.append([i,j])

blankPage()
print(" _____=====*****WELCOME TO MATCH OF TIK-TAK-TOE*****=====_____\n\n\n\n")
print("Press Enter to start the game.....")
space()
input()
theEnd = 0
while not theEnd:
	print("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
	print("Enter Number of match you want...",end = "")
	userInput = input().strip()
	flag = 1
	while(flag):
		if userInput.isdigit():
			if int(userInput) in range (1,101):
				flag = 0
			else:
				print("\n!!!Maximum number is 100 and minimum is 1\nEnter a valid number...",end = "")
				userInput = input().strip()
		else:
			print("\nEnter a valid input...",end = "")
			userInput = input().strip()
	total = int(userInput)
	name1 = input("Name of first player...").strip()
	while len(name1) <1 :
		print("Please enter a valid input...",end = "")
		name1 = input().strip()
	name2 = input("Name of second player...").strip()
	while len(name2) <1 :
		print("Please enter a valid input...",end = "")
		name2 = input().strip()
	while (name1 == name2):
		print("Please enter two distinguised name...")
		name1 = input("Name of first player...").strip()
		while len(name1) <1 :
			print("Please enter a valid input...",end = "")
			name1 = input().strip()
		name2 = input("Name of second player...").strip()
		while len(name2) <1 :
			print("Please enter a valid input...",end = "")
			name2 = input().strip()
	name1Score = 0
	name2Score = 0
	for t in range(0,total):	
		fun()
		matePos = []
		blankPos = []
		posOfCross = []
		posOfCircle = []
		blankPage()
		print("Score of "+name1+":"+str(name1Score))
		print("Score of "+name2+":"+str(name2Score))
		print("\n Let's make a toss.....")
		print("\npress Enter to see result......")
		space()
		input()
		tossIndicator = 1
		player1 = random.choice([name1,name2])
		player2 = name2
		if player1 == player2:
			player2 = name1
			tossIndicator = 0
		print("\n________________Congratulation " + player1 + " wins the toss")
		move1 = []
		move2 = []
		score1 = 0
		score2 = 0
		print("As "+player1+" wins the toss he will come first and 'cross' is your....")
		print("\nPress Enter to start the game.........")
		space()
		input()
		fun()
		blankPage()
		count = 0
		playerCh = 1
		drawBoard()
		gameOver = 0
		while not gameOver:
			count += 1
			if playerCh == 1:
				playerCh *= -1
				print(player1+"'s turn....\nEnter the number denoting the postion....",end = "")
				turn = input().strip()
				flag = 1
				while (flag) :
					if(turn.isdigit()):
						if (not int(turn) in range(1,10)) or (int(turn) in move1) or (int(turn) in move2):
							print("\nPlease enter a vlid Input....",end = "")
							turn = input()
						else:
							flag = 0
					else :
						print("\nPlease enter a valid input...",end = "")
						turn = input()
				putCross(int(turn))
				move1.append(int(turn))
			else:
				playerCh *= -1
				print(player2+"'s turn....\nEnter the number denoting the postion....",end = "")
				turn = input().strip()
				flag = 1
				while (flag) :
					if(turn.isdigit()):
						if (not int(turn) in range(1,10)) or (int(turn) in move1) or (int(turn) in move2):
							print("\nPlease enter a vlid Input....",end = "")
							turn = input()
						else:
							flag = 0
					else :
						print("\nPlease enter a valid input...",end = "")
						turn = input()
				putCircle(int(turn))
				move2.append(int(turn))
			drawBoard()
			for moves in winingPos:
				if(all (move in move1 for move in moves)):
					posOfCircle = []
					posOfCross = []
					blankTable()
					for position in moves:
						addMatePos(position)
					drawBoard()
					print("\n*********************"+player1+" wins the game*********************")
					print("Press Enter to continue......")
					input()
					score1 += 10
					gameOver = 1
					exit
				elif (all (move in move2 for move in moves)):
					posOfCircle = []
					posOfCross = []
					blankTable()
					for position in moves:
						addMatePos(position)
					drawBoard()
					print("\n*********************"+player2+" wins the game********************")
					print("Press Enter to continue......")
					input()
					score2 += 10
					gameOver = 1
					exit
			
			if(count == 9):
				if gameOver == 0:
					print("\m**********************It's a wonderful DRAW***********************")
					space()
					print("Press enter to continue.....")
					input()
					score1 += 5
					score2 += 5
					gameOver = 1
			if tossIndicator:
				name1Score += score1
				name2Score += score2
			else:
				name1Score += score2
				name2Score += score1
	blankPage()
	print("Score of "+name1+":"+str(name1Score))
	print("Score of "+name2+":"+str(name2Score))
	space()
	print("Press any key to continue...")
	input()
	if(name1Score > name2Score):
		fun()
		fun()
		fun()
		blankPage()
		print("\t\t_____=====*****" + name1.upper() +" is WINNER*****=====_____")
		space()
	elif(name1Score < name2Score):
		fun()
		fun()
		fun()
		blankPage()
		print("\t\t_____=====*****" + name2.upper() +" is WINNER*****=====_____")
		space()
	else:
		blankPage()
		print("It is a wonderful DRAW")
		print("Press Enter  to toss and decide WINNER.....")
		space()
		input()
		fun()
		fun()
		fun()
		blankPage()
		print("_____=====*****" + random.choice([name1.upper(),name2.upper()]) +"is WINNER*****=====_____")
		space()
	input()
	fun()
	blankPage()
	print("Developer -> Sayak Das")
	space()
	print("Enter <1> to play again and any other to exit........",end = "")
	isExit = input()
	if isExit == "1":
		theEnd = 0
	else:
		theEnd = 1
		
