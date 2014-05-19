run:
	@ echo "❯ Running..."
	@ cfx run

compile:
	@ echo "❯ Compiling..."
	@ cfx xpi && mv text-editor.xpi ./dist

