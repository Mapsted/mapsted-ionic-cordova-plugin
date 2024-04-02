#import <Cordova/CDV.h>

NS_ASSUME_NONNULL_BEGIN

@interface CordovaPluginMapsted : CDVPlugin

- (void)echo:(CDVInvokedUrlCommand*)command; // Declare the echo method
- (void)launchMapActivity:(CDVInvokedUrlCommand*)command;

@end

NS_ASSUME_NONNULL_END
