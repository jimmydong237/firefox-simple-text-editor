run:
	@ echo "❯ Running..."
	@ cfx run

run-nightly:
	@ echo "❯ Running..."
	@ cfx run -b /Applications/FirefoxNightly.app

compile:
	@ echo "❯ Compiling..."
	@ cfx xpi && mv simple-text-editor.xpi ./dist

