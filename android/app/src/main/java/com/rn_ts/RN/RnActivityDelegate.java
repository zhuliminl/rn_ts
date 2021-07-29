package com.rn_ts.RN;
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import androidx.annotation.Nullable;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactRootView;
import com.facebook.react.fabric.ReactNativeConfig;

public class RnActivityDelegate extends ReactActivityDelegate {
    private static final String TAG = "RnActivityDelegate";
    private RnActivity rnActivity = null;


    public RnActivityDelegate(RnActivity activity, @Nullable @org.jetbrains.annotations.Nullable String mainComponentName) {
        super(activity, mainComponentName);
        rnActivity = activity;
    }

    @Nullable
    @org.jetbrains.annotations.Nullable
    protected Bundle getLaunchOptions() {
        Log.d(TAG, "getLaunchOptions: >>>>>>>>>>>>>>>>>>>>>>");
//        Bundle  launchOptions = rnActivity.getParams()
        Intent intent = rnActivity.getIntent();
//        Bundle  launchOptions = new Bundle();
        Bundle  launchOptions = intent.getExtras();
        launchOptions.putString("version", "5.502");
        return launchOptions;
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
