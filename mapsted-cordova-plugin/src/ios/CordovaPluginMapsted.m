#import "CordovaPluginMapsted.h"
#import <UIKit/UIKit.h>
#import "mapstedCordovaProject-Swift.h" // Here you have to #import "<#YourProjectName#>-Swift.h"

@interface CordovaPluginMapsted ()

@property (nonatomic, strong) CordovaPluginMapsted *implementation;
@property (nonatomic) BOOL showPropertyList;

@end

@implementation CordovaPluginMapsted

- (instancetype)init {
    self = [super init];
    if (self) {
        // self.implementation = [[CordovaPluginMapsted alloc] init];
        self.showPropertyList = YES;
    }
    return self;
}

- (void)launchMapActivity:(CDVInvokedUrlCommand*)command {
    
    if (self.showPropertyList == NO) {
        // Instantiate the view controller from the Swift storyboard
        UIStoryboard *storyboard = [UIStoryboard storyboardWithName:@"CordovaPluginMapsted" bundle:[NSBundle bundleForClass:[CordovaPluginMapsted class]]];
        UIViewController *viewController = [storyboard instantiateViewControllerWithIdentifier:@"MAPSTEDVC"];
        
        // Check if the viewController is a subclass of UIViewController
        if ([viewController isKindOfClass:[UIViewController class]]) {
            // Set the modal presentation style and present the view controller
            viewController.modalPresentationStyle = UIModalPresentationOverCurrentContext;
            
            UIViewController *topViewController = [UIApplication sharedApplication].keyWindow.rootViewController;
            while (topViewController.presentedViewController) {
                topViewController = topViewController.presentedViewController;
            }
            
            [topViewController presentViewController:viewController animated:YES completion:nil];
        } else {
            NSLog(@"Error: viewController is not a subclass of UIViewController.");
        }
    }
    else {
        UIStoryboard *storyboard = [UIStoryboard storyboardWithName:@"CordovaPluginMapsted" bundle:[NSBundle bundleForClass:[CordovaPluginMapstedPropListViewController class]]];
        UIViewController *viewController = [storyboard instantiateViewControllerWithIdentifier:@"MAPSTEDPROPLISTVC"];
        
        if ([viewController isKindOfClass:[UIViewController class]]) {
            // Set the modal presentation style and present the view controller
            viewController.modalPresentationStyle = UIModalPresentationOverCurrentContext;
            
            UIViewController *topViewController = [UIApplication sharedApplication].keyWindow.rootViewController;
            while (topViewController.presentedViewController) {
                topViewController = topViewController.presentedViewController;
            }
            //
            UINavigationController *navController = [[UINavigationController alloc] initWithRootViewController:viewController];
            navController.modalPresentationStyle = UIModalPresentationOverCurrentContext;
            [topViewController presentViewController:navController animated:YES completion:nil];
        } else {
            NSLog(@"Error: viewController is not a subclass of UIViewController.");
        }
    }
}

- (void)echo:(CDVInvokedUrlCommand*)command {
    // Call the echo method from Swift
    NSString *value = [command.arguments objectAtIndex:0];
    CordovaPluginMapstedViewController *vc = [[CordovaPluginMapstedViewController alloc] init];
    NSString *echoedValue = [vc echoSwift:value];
    CDVPluginResult *pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echoedValue];
    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

@end
