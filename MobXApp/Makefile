.PHONY: android ios

setup:
	npm install	

reset:
	watchman watch-del-all
	rm -rf node_modules && npm install

android:
	react-native run-android

ios:
	react-native run-ios

openios:
	open ios/MobXApp.xcodeproj
