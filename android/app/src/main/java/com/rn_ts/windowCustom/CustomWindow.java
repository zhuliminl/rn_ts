package com.rn_ts.windowCustom;

import android.app.Activity;
import android.os.Build;
import android.util.Log;
import android.view.WindowManager;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Map;
import java.util.HashMap;

public class CustomWindow extends ReactContextBaseJavaModule {
    private static final String TAG = "CustomWindow";

    CustomWindow(ReactApplicationContext context) {
        super(context);
    }


    @ReactMethod
    public void setToFull() {
        Log.d(TAG, "setToFull: >>>>>>>>>>");
        Activity activity = getCurrentActivity();
        if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            WindowManager.LayoutParams layoutParams = new WindowManager.LayoutParams();
            layoutParams.layoutInDisplayCutoutMode = WindowManager.LayoutParams.LAYOUT_IN_DISPLAY_CUTOUT_MODE_SHORT_EDGES;
            activity.getWindow().setAttributes(layoutParams);
            activity.getWindow().addFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
            activity.getWindow().addFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_NAVIGATION);
        }

    }

    @Override
    public String getName() {
        return "CustomWindow";
    }
}