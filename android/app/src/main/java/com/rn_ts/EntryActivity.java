package com.rn_ts;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;


public class EntryActivity extends AppCompatActivity {
    private static final String TAG = "EntryActivity";
    

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        Log.d(TAG, "onCreate: ");
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_entry);

        Button button_entry_1 = (Button) findViewById(R.id.button_entry_1);
        button_entry_1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(EntryActivity.this, MainActivity.class);
                startActivity(intent);
            }
        });

        Button button_entry_2 = (Button) findViewById(R.id.button_entry_2);
        button_entry_2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(EntryActivity.this, SubRnActivity.class);
                startActivity(intent);
            }
        });



    }
}