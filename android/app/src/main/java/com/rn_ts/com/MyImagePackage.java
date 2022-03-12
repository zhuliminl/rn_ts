package com.rn_ts.com;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


public class MyImagePackage implements ReactPackage {
    private static final String TAG = "saul";


    @Override
    public List<ViewManager> createViewManagers( ReactApplicationContext reactContext) {
        return Arrays.<ViewManager>asList(
                new MyImageManager(reactContext)
        );
    }

    @Override
    public List<NativeModule> createNativeModules(
            ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        return modules;
    }

}
