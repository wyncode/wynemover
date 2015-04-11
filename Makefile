ROOT_DIR:=$(CURDIR)
SRC_DIR=src
FIREFOX_DIR=$(SRC_DIR)/firefox
CHROME_DIR=$(SRC_DIR)/chrome
SAFARI_DIR=$(SRC_DIR)/safari

all: build_chrome build_firefox

build_chrome:
	crxmake --pack-extension=$(CHROME_DIR) --extension-output=wynemover.crx

build_firefox:
	cd $(FIREFOX_DIR) && zip -r -FS $(ROOT_DIR)wynemover.xpi .


