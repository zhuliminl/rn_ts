package com.rn_ts.com;

import static java.security.AccessController.getContext;

import android.annotation.SuppressLint;
import android.content.Context;
import android.view.View;
import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.events.RCTEventEmitter;


@SuppressLint("ViewConstructor")
public class MyReactImageView extends androidx.appcompat.widget.AppCompatImageView implements LifecycleEventListener {
    private final String TAG = "MyReactImageView";
    private RCTEventEmitter mEventEmitter;
    private ThemedReactContext mThemedReactContext;

    public MyReactImageView(ThemedReactContext themedReactContext) {
        super(themedReactContext);


        mThemedReactContext = themedReactContext;
        mEventEmitter = themedReactContext.getJSModule(RCTEventEmitter.class);
        themedReactContext.addLifecycleEventListener(this);



        this.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View view) {
                showToast("图片被点击");
                onReceiveNativeEvent();
            }
        });

    }

    public void onReceiveNativeEvent() {
        WritableMap event = Arguments.createMap();
        event.putString("message", "MyMessage");
        mEventEmitter.receiveEvent(
                getId(),
                "onImagePress",
                event);
    }

    public void showToast(String title) {
        Toast.makeText(getContext(), title, Toast.LENGTH_LONG).show();
    }

    @Override
    public void onHostResume() {

    }

    @Override
    public void onHostPause() {

    }

    @Override
    public void onHostDestroy() {

    }
}
