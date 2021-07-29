package com.rn_ts.RN;
import android.app.Activity;
import android.os.Bundle;
import android.util.Log;

import androidx.annotation.Nullable;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactRootView;

public class RnActivityDelegate extends ReactActivityDelegate {
    private static final String TAG = "RnActivityDelegate";


    public RnActivityDelegate(RnActivity activity, @Nullable @org.jetbrains.annotations.Nullable String mainComponentName) {
        super(activity, mainComponentName);
    }

    @Nullable
    @org.jetbrains.annotations.Nullable
    protected Bundle getLaunchOptions() {
        return super.getLaunchOptions();
    }

    protected ReactNativeHost getReactNativeHost() {
        return super.getReactNativeHost();
    }

    protected ReactRootView createRootView() {
        return super.createRootView();
    }

    protected void onCreate(Bundle savedInstanceState) {
        Log.d(TAG, "onCreate: delegate");
        super.onCreate(savedInstanceState);
    }

    protected void loadApp(String appKey) {
        Log.d(TAG, "loadApp: " + appKey);
        super.loadApp(appKey);
    }

    protected void onPause() {
        super.onPause();
    }

    protected void onResume() {
        super.onResume();
    }

    protected void onDestroy() {
        super.onDestroy();
    }
}
